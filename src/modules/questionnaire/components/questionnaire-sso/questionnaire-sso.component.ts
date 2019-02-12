import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/modules/app/services';

@Component({
  selector: 'app-questionnaire-sso',
  templateUrl: './questionnaire-sso.component.html',
  styleUrls: ['./questionnaire-sso.component.scss']
})
export class QuestionnaireSsoComponent implements OnInit {

  constructor( private appService: AppService ) { }

  ngOnInit() {
    setTimeout(() => {
      this.appService.redirectUser({ path: 'questionnaire/list' });
    }, 5000);
  }

}
