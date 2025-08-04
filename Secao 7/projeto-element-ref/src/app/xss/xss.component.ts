import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  standalone: false,
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss',
})
export class XssComponent {
  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {}

  createElement(value: string): void {
    const divEl = document.createElement('div');
    divEl.innerHTML = value;
    divEl.classList.add('bg-red');

    this._elRef.nativeElement.appendChild(divEl);
  }

  createElementSafe(value: string): void {
    const divEl = this._renderer2.createElement('div');
    divEl.classList.add('bg-red');
    const divText = this._renderer2.createText(value);
    this._renderer2.appendChild(divEl, divText);
    this._renderer2.appendChild(this._elRef.nativeElement, divEl);
  }
}
