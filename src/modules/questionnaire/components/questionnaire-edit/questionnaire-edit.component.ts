import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionnaireService } from 'src/modules/questionnaire/services';
import { Observable, Subject, from, of } from 'rxjs';
import {
  IQuestionnaire,
  IFormField,
  IFormSection,
  IForm
} from 'src/modules/app/models';
import { ActivatedRoute } from '@angular/router';
import {
  takeUntil,
  map,
  mergeMap,
  toArray,
  filter,
  withLatestFrom
} from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss']
})
export class QuestionnaireEditComponent implements OnInit, OnDestroy {
  private componetDestroyed: Subject<any> = new Subject();
  public currentQuestionnaire$: Observable<
    IQuestionnaire
  > = this.questionnaireService.currentQuestionnaire$.pipe(
    filter(currentQuestionnaire => currentQuestionnaire != null)
  );
  public currentQuestionnaireForm$: Observable<
    IForm
  > = this.currentQuestionnaire$.pipe(
    map(questionnaire => (questionnaire.form ? questionnaire.form : null))
  );
  public formSections$: Observable<
    IFormSection[]
  > = this.currentQuestionnaireForm$.pipe(
    map(form => (form ? form.sections : [])),
    mergeMap(sections =>
      from(sections).pipe(
        map(section => ({
          ...section,
          fields: section.fields.map(field => ({
            ...field,
            key: `question_${field.id}`
          }))
        })),
        toArray()
      )
    )
  );
  public formQuestions$: Observable<IFormField[]> = this.formSections$.pipe(
    mergeMap(sections =>
      from(sections).pipe(
        map(section => section.fields),
        toArray()
      )
    ),
    map(sectionFields => [].concat(...sectionFields))
  );
  public questionnaireForm: FormGroup;

  public ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.id),
        takeUntil(this.componetDestroyed)
      )
      .subscribe(currentQuestionnaireId =>
        this.questionnaireService.loadCurrentQuestionnaire(
          currentQuestionnaireId
        )
      );
    this.formQuestions$
      .pipe(takeUntil(this.componetDestroyed))
      .subscribe(formQuestions => {
        this.questionnaireForm = this.toFormGroup(formQuestions);
      });
  }

  public onQuestionnaireFormSubmit(): void {
    if (this.questionnaireForm.invalid) {
      return;
    }
    of(this.questionnaireForm.getRawValue())
      .pipe(
        map(formData =>
          Object.keys(formData).map(key => ({
            fieldId: key.replace('question_', ''),
            value: formData[key]
          }))
        ),
        withLatestFrom(this.currentQuestionnaire$),
        takeUntil(this.componetDestroyed)
      )
      .subscribe(([answers, questionnaire]) =>
        this.questionnaireService.sendQuestionnaireAnswers(
          questionnaire.id,
          answers
        )
      );
  }

  public ngOnDestroy(): void {
    this.componetDestroyed.next();
    this.componetDestroyed.unsubscribe();
  }

  private toFormGroup(questions: IFormField[]): FormGroup {
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  constructor(
    private route: ActivatedRoute,
    private questionnaireService: QuestionnaireService
  ) {}
}
