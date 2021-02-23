import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { ImageslideComponent } from './imageslide/imageslide.component';

import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';




import { LoansComponent } from './loans/loans.component';
import { ManageComponent } from './manage/manage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Paymentcheck1Guard } from './paymentcheck1.guard';
import { PaymentsComponent } from './payments/payments.component';
import { ResolverGuard } from './resolver.guard';





const routes: Routes = [
  
 {
 path: 'admin-edit',
 
 
 
 canActivate:[AuthGuard],
 children:[
   {
     path:'',
     
     canActivateChild:[AdminGuard],
     children:[
       {
         path:'manage',
         component: ManageComponent
       }
     ]
    
   }
 ]
 
  
 },
  {
    path: 'loan',
    component:LoansComponent,
    canActivate:[AuthGuard],
    resolve:{
      data: ResolverGuard
    }
  },
  
  { path: 'payments', canLoad:[ Paymentcheck1Guard], loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'admin-edit', loadChildren: () => import('./admin-edit/admin-edit.module').then(m => m.AdminEditModule) },
  {path: 'customer', component: CustomerComponent},
  {path:'image', component: ImageslideComponent},
  
  {
  path: '**',
  component: PagenotfoundComponent
  },
  


  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
