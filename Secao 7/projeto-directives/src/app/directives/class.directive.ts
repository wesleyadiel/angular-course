import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: false,
})
export class ClassDirective {
  @HostBinding('class') class = { 'meu-texto': true, 'meu-size': true };
}
