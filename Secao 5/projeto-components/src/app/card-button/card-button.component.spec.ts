import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonComponent } from './card-button.component';
import { EventEmitter, Output } from '@angular/core';

describe('CardButtonComponent', () => {
  let component: CardButtonComponent;
  let fixture: ComponentFixture<CardButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardButtonComponent],
    });
    fixture = TestBed.createComponent(CardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
