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

  ItensSaldoList: any[] = [
    { key: 'Conta Corrente', value: 'R$ 200,00' },
    { key: 'Conta Corrente Saldo Vinculados', value: 'R$ 300,00' },
    { key: 'Conta Poupança Saldo Vinculados', value: 'R$ 400,00' },
    { key: 'Investimentos com Baixa Automática', value: 'R$ 500,00' },
    { key: 'Investimentos sem Baixa Automática', value: 'R$ 200,00' },
  ];

  ItensTotalList: any[] = [
    { key: 'SALDO TOTAL', value: 'R$ 1000,00' },
    { key: 'LIVRE PARA MOVIMENTAÇÃO', value: 'R$ 1000,00' },
  ];
}
