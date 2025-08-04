import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('style')
  cardStyle: 'purple' | 'orange' = 'orange';

  @Input({ required: true })
  planType: string = '';

  @Input({ required: true })
  planPrice: number = 0;

  @Output('buttonClicked')
  cardClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.cardClickedEmit.emit();
  }
}
