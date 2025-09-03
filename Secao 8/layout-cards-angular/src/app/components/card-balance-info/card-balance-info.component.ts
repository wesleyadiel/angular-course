import { Component } from '@angular/core';

@Component({
  selector: 'app-card-balance-info',
  standalone: false,
  templateUrl: './card-balance-info.component.html',
  styleUrl: './card-balance-info.component.scss',
})
export class CardBalanceInfoComponent {
  Titulo: string = 'Saldos Disponíveis';
  Subtitulo: string = 'R$ 100,00';
  SrcIcon: string = 'icons/icon-hand.png';
}
