import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: false,
})
export class StyleDirective {
  @HostBinding('style') style = 'color: red; font-size: 20px;';
}
