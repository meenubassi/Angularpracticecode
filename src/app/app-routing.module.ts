import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';


import { LoansComponent } from './loans/loans.component';



const routes: Routes = [
 
  {

    path: 'contacts',
    
    children:[{
      path:'add-contacts',
      component: AddContactsComponent
    }]
  },
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
