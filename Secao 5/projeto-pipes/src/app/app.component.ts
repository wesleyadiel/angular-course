import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pessoa = { name: 'Wesley', idade: 26, profissao: 'Programador', status: 1 };
  pessoa2 = { name: 'Maria', idade: 30, profissao: 'Designer', status: 2 };
  pessoa3 = { name: 'João', idade: 28, profissao: 'Engenheiro', status: 3 };
}
