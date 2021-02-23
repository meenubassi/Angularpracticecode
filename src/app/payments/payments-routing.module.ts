import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paymentcheck1Guard } from '../paymentcheck1.guard';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
