import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true }) planPrice: number = 0;
  @Input({
    alias: 'planTypeSecond',
    transform: (value: string) => value.toUpperCase(),
  })
  planTypeSecond: string = '';

  private _planType: string = '';

  @Input('planType') set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  buttonClicked(valueEmmited: boolean) {
    console.log('buttonClicked -> ', valueEmmited);
    console.log('planType', this.planType);
  }
}
