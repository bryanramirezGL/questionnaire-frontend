import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from 'src/modules/questionnaire/services';
import { IQuestionnaire } from 'src/modules/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  public currentQuestionnaires$: Observable<IQuestionnaire[]> = this.questionnaireService.currentQuestionnaires$;

  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    this.questionnaireService.loadCurrentQuestionnaires(1);
  }

}
