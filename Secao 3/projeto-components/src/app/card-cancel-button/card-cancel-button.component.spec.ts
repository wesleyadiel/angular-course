import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCancelButtonComponent } from './card-cancel-button.component';

describe('CardCancelButtonComponent', () => {
  let component: CardCancelButtonComponent;
  let fixture: ComponentFixture<CardCancelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCancelButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
