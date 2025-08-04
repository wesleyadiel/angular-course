import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
  standalone: false,
})
export class FocusSecondInputDirective implements AfterViewInit {
  // @HostBinding('style.backgroundColor') backgroundColor = 'yellow';
  // @HostBinding('textContent') text = 'Sou uma div';

  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this._elRef);
    const inputList = this._elRef.nativeElement.querySelectorAll(
      'input'
    ) as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].focus();
      inputList[1].placeholder = 'Focado via ElementRef+diretiva';
    }
  }
}
