import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEditRoutingModule } from './admin-edit-routing.module';
import { AdminEditComponent } from './admin-edit.component';


@NgModule({
  declarations: [AdminEditComponent],
  imports: [
    CommonModule,
    AdminEditRoutingModule
  ]
})
export class AdminEditModule { }
