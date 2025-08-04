import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'transparent';
  }

  constructor() {}
}
