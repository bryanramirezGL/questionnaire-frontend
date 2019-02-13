import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionnaireService } from 'src/modules/questionnaire/services';
import { IQuestionnaire } from 'src/modules/app/models';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, group }
    from '@angular/animations';
    
@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateY(-100px)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('2.2s ease', style({
            transform: 'translateY(-100px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class QuestionnaireListComponent implements OnInit, OnDestroy {
  
  private componetDestroyed: Subject<any> = new Subject();
  public currentQuestionnaires$: Observable<IQuestionnaire[]> = this.questionnaireService.currentQuestionnaires$;

  constructor(private route: ActivatedRoute, private questionnaireService : QuestionnaireService) { }

  showMessage: boolean = false;

  ngOnInit() {
    this.questionnaireService.loadCurrentQuestionnaires(1)
  }

  isDisabled() : void{
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  public ngOnDestroy(): void {
    this.componetDestroyed.next();
    this.componetDestroyed.unsubscribe();
  }
}
