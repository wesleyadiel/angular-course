import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') minhaDiv!: ElementRef<HTMLDivElement>;

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _testeService: TesteService
  ) {}

  ngOnInit(): void {
    console.log(this._elRef);
    const minhaOutraDiv = this._elRef.nativeElement.querySelector(
      '#minha-outra-div'
    ) as HTMLDivElement;
    console.log(minhaOutraDiv);
  }

  ngAfterViewInit(): void {
    this.minhaDiv.nativeElement.style.backgroundColor = 'blue';
    this.minhaDiv.nativeElement.textContent = 'Texto adicionado via ElementRef';
    this.minhaDiv.nativeElement.classList.add('minha-div');
  }

  createElement(): void {
    const novaDiv = document.createElement('div');
    novaDiv.textContent = 'Nova Div';
    novaDiv.classList.add('bg-red');

    this._elRef.nativeElement.appendChild(novaDiv);
  }

  createElementService(): void {
    this._testeService.create(this._elRef);
  }
}
