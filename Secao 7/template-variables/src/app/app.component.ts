import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'template-variables';

  @ViewChild('meuInput2') meuInput2!: ElementRef<HTMLInputElement>;
  @ViewChild('minhaDiv') minhaDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('filhoComp') filhoCompRef!: FilhoComponent;

  buttonsList = ['botao 1', 'botao 2', 'botao 3'];

  @ViewChildren('meuButton')
  buttonsEL!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(): void {
    console.log(this.buttonsEL);
    this.buttonsEL.changes.subscribe((buttons) => {
      console.log('Mudou a lista de botões', buttons);
    });
  }

  clicou(input: HTMLInputElement) {
    console.log(input.value);
  }

  updateInput2() {
    this.meuInput2.nativeElement.value = 'Novo valor';
  }

  focusInput2() {
    this.meuInput2.nativeElement.focus();
  }

  updateDivContent() {
    this.minhaDiv.nativeElement.innerHTML = 'Novo conteúdo da div';
  }

  hellou() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Mensagem atualizada pelo pai';
  }

  changeColor(event: any) {
    console.log(event);
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEL.forEach((button) => {
      button.nativeElement.style.backgroundColor = '';
      button.nativeElement.style.color = '';
    });
  }

  first() {
    const firstButton = this.buttonsEL.first;
    if (firstButton) {
      firstButton.nativeElement.style.backgroundColor = 'blue';
      firstButton.nativeElement.style.color = 'white';
    }
  }

  remove() {
    this.buttonsList.shift();
  }
}
