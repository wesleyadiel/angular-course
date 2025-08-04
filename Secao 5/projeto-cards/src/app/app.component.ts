import { Component, Type } from '@angular/core';

interface TPlan {
  planType: string;
  planPrice: number;
  cardStyle: 'purple' | 'orange';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  planoSimples: TPlan = {
    planType: 'Simples',
    planPrice: 19,
    cardStyle: 'purple',
  };

  planoAvancado: TPlan = {
    planType: 'Completo',
    planPrice: 29,
    cardStyle: 'orange',
  };

  onCardButtonClicked(plano: TPlan) {
    console.log('onCardButtonClicked ->', plano.planType);
  }
}
