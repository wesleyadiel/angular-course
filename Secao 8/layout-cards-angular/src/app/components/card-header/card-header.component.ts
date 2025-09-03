import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  standalone: false,
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {
  @Input() text: string = '';
  @Input() srcIcon: string = '';
  @Input() subText: string = '';
  @Input() color: 'primary' | 'secondary' = 'primary';
}
