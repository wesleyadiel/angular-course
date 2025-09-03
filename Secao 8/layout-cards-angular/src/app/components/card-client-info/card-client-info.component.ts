import { Component } from '@angular/core';

@Component({
  selector: 'app-card-client-info',
  standalone: false,
  templateUrl: './card-client-info.component.html',
  styleUrl: './card-client-info.component.scss',
})
export class CardClientInfoComponent {
  Titulo: string = 'Informações do Cliente';
  SrcIcon: string = 'icons/icon-client.png';
  StyleHeader: 'secondary' = 'secondary';

  ItensList: any[] = [
    { key: 'Nome', value: 'Wesley Adiel Alves de Lima' },
    { key: 'Idade', value: '26 anos' },
    { key: 'Renda Mensal', value: 'R$ -1.000,00' },
  ];
}
