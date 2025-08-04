import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonRoxoComponent } from '../card-button-roxo/card-button-roxo.component';
import { CardCancelButtonComponent } from '../card-cancel-button/card-cancel-button.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardButtonRoxoComponent,
    CardCancelButtonComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [
    CardComponent,
    //CardButtonComponent,
    CardRoxoComponent,
    //CardButtonRoxoComponent,
  ],
})
export class CardsModule {}
