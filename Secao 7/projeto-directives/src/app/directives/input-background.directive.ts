import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]',
  standalone: false,
})
export class InputBackgroundDirective {
  @Input() appInputBackground: string = 'white';
  @Input() textColor: string = 'black';

  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.color') color: string = '';

  @HostListener('focus')
  onFocus() {
    this.backgroundColor = this.appInputBackground;
    this.color = this.textColor;
  }

  @HostListener('blur')
  onBlur() {
    this.backgroundColor = '';
    this.color = '';
  }
}
