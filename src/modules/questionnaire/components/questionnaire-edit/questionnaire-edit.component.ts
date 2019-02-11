import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/modules/app/services';
import { QuestionnaireService } from 'src/modules/questionnaire/services';
import { Observable, from } from 'rxjs';
import { IQuestionnaire } from 'src/modules/app/models';

@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.scss']
})
export class QuestionnaireEditComponent implements OnInit, OnDestroy {
  public appLoading$: Observable<boolean> = this.appService.appLoading$;
  public currentQuestionnaire$: Observable<IQuestionnaire> = this.questionnaireService.currentQuestionnaire$;

  public ngOnInit(): void {
    // Example Code
    this.appService.showLoading();
    setTimeout(() => {
      this.appService.hideLoading();
    }, 3000);
    // Get current QuestionaireData
    this.questionnaireService.loadCurrentQuestionnaire(1);
  }

  public ngOnDestroy(): void {}

  constructor(
    private appService: AppService,
    private questionnaireService: QuestionnaireService,
  ) {}
}
