import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/modules/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit, OnDestroy {
  public appLoading$: Observable<boolean> = this.appService.appLoading$;

  public ngOnInit(): void {
    // Example Code
    this.appService.showLoading();
    setTimeout(() => {
      this.appService.hideLoading();
    }, 3000);
  }

  public ngOnDestroy(): void {}

  constructor(private appService: AppService) {}
}
