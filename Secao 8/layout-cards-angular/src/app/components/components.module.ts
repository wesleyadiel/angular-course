import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { DividerComponent } from './divider/divider.component';
import { CardCreditInfoComponent } from './card-credit-info/card-credit-info.component';
import { CardBalanceInfoComponent } from './card-balance-info/card-balance-info.component';
import { CardDebitInfoComponent } from './card-debit-info/card-debit-info.component';

@NgModule({
  declarations: [
    CardHeaderComponent,
    DividerComponent,
    CardCreditInfoComponent,
    CardBalanceInfoComponent,
    CardDebitInfoComponent,
  ],
  imports: [CommonModule],
  exports: [CardBalanceInfoComponent, CardCreditInfoComponent],
})
export class ComponentsModule {}
