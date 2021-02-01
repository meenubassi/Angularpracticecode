import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightsDirective } from './highlights.directive';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HighlightsDirective,
    LoansComponent,
    AddLoansComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
