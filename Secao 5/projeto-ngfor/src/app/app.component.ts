import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Felipe Freitas', age: 20 },
    { name: 'Fulano da Silva', age: 25 },
    { name: 'Jorginho Carvalho', age: 30 },
    { name: 'Joãozinho da Silva', age: 22 },
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
