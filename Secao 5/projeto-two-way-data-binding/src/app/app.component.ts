import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-two-way-data-binding';
  name: string = 'Wesley';

  handleInputChange(value: any) {
    console.log(value.toUpperCase());
  }
}
