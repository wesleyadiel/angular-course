import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fontSize: number = 20;
  fontColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja';
  stylesString: string = 'font-size: 20px; color: white;';

  increaseFontSize() {
    this.fontSize += 5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.fontColor};`;
  }

  toogleFontColor() {
    if (this.fontColor === 'white') {
      this.buttonText = 'Branco';
      this.fontColor = 'orange';
    } else {
      this.buttonText = 'Laranja';
      this.fontColor = 'white';
    }
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.fontColor};`;
  }
}
