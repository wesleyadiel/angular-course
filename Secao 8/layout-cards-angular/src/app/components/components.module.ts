import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { DividerComponent } from './divider/divider.component';
import { CardCreditInfoComponent } from './card-credit-info/card-credit-info.component';
import { CardBalanceInfoComponent } from './card-balance-info/card-balance-info.component';
import { CardDebitInfoComponent } from './card-debit-info/card-debit-info.component';
import { CardClientInfoComponent } from './card-client-info/card-client-info.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [
    CardHeaderComponent,
    DividerComponent,
    CardCreditInfoComponent,
    CardBalanceInfoComponent,
    CardDebitInfoComponent,
    CardClientInfoComponent,
    CardItemComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardBalanceInfoComponent,
    CardCreditInfoComponent,
    CardDebitInfoComponent,
    CardClientInfoComponent,
  ],
})
export class ComponentsModule {}
