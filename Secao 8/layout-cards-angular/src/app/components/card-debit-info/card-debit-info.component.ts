import { Component } from '@angular/core';

@Component({
  selector: 'app-card-debit-info',
  standalone: false,
  templateUrl: './card-debit-info.component.html',
  styleUrl: './card-debit-info.component.scss',
})
export class CardDebitInfoComponent {
  Titulo: string = 'Cartão de Débito';
  SrcIcon: string = 'icons/icon-debit-card.png';
}
