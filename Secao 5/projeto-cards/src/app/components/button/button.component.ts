import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' })
  buttonText: string = '';

  @Input('style')
  buttonStyle: 'white' | 'purple' = 'white';

  @Input('disabled')
  isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmit = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClickedEmit.emit();
  }
}
