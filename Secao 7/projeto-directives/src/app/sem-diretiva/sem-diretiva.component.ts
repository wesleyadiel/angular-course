import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  standalone: false,
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss',
})
export class SemDiretivaComponent {
  addBgColor: boolean = true;
  mouseOver() {
    console.log('Mouse over!');
    this.addBgColor = true;
  }

  mouseOut() {
    console.log('Mouse out!');
    this.addBgColor = false;
  }
}
