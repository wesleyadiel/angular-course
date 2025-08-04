import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  //constructor(private _elRef: ElementRef) {}

  create(elRef: ElementRef): void {
    const novaDiv = document.createElement('div');
    novaDiv.textContent = 'Nova Div';
    novaDiv.classList.add('bg-red');

    elRef.nativeElement.appendChild(novaDiv);
  }
}
