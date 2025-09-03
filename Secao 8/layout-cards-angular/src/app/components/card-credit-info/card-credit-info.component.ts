import { Component } from '@angular/core';

@Component({
  selector: 'app-card-credit-info',
  standalone: false,
  templateUrl: './card-credit-info.component.html',
  styleUrl: './card-credit-info.component.scss',
})
export class CardCreditInfoComponent {
  Titulo: string = 'Cartão de Crédito';
  SrcIcon: string = 'icons/icon-credit-card.png';
}
