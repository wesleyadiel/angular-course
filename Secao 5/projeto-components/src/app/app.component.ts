import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardPlanType = 'Completo';
  cardPlanPrice = 200;

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}
