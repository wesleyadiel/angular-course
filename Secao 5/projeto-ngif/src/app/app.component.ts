import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  minhaProp = true;
  pessoa = {
    nome: 'Lucas',
    idade: 25,
    status: true,
  };

  toogleProp() {
    this.minhaProp = !this.minhaProp;
  }

  isTruthy() {
    // return {};
    // return [];
    // return true;
    // return 1;
    // return 'teste';
    // return '0';
    // return 'false';
    return this.pessoa.status;
  }

  isFalsy() {
    // return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    return NaN;
    // return this.pessoa.status;
  }
}
