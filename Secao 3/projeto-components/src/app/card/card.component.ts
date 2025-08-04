import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CardComponent {
  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
