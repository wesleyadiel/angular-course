import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]',
  standalone: false,
})
export class ListenerDirective {
  @HostListener('click')
  onClick() {
    console.log('Element clicked!');
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const fullText = (event.target as HTMLInputElement).value;
    console.log('Full text:', fullText);
  }
}
