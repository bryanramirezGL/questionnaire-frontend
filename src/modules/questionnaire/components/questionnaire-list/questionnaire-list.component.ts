import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionnaireService } from 'src/modules/questionnaire/services';
import { IQuestionnaire } from 'src/modules/app/models';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit, OnDestroy {
  
  private componetDestroyed: Subject<any> = new Subject();
  public currentQuestionnaires$: Observable<IQuestionnaire[]> = this.questionnaireService.currentQuestionnaires$;

  constructor(private route: ActivatedRoute, private questionnaireService : QuestionnaireService) { }

  ngOnInit() {
    this.questionnaireService.loadCurrentQuestionnaires(1)
  }

  public ngOnDestroy(): void {
    this.componetDestroyed.next();
    this.componetDestroyed.unsubscribe();
  }
}
