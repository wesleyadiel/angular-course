import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fundamento-secao-4';
  buttonTitle = 'button title fundamento-secao-4';
  inputText = 'Texto Inicial';
  inputType = 'text';
  isDisabled = false;
  count = 1;

  widthButton1 = '110px';

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  log() {
    console.log(this.inputText);
    this.buttonTitle = 'mudou para ' + this.count++;
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }
}
