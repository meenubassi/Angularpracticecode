import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightsDirective } from './highlights.directive';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import{ SearchService} from './search.service';

import { CustomerComponent } from './customer/customer.component';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ImageslideComponent } from './imageslide/imageslide.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightsDirective,
    LoansComponent,
    AddLoansComponent,
    
    CustomerComponent,
    
    ImageslideComponent,
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    CarouselModule,
    
  
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy,},
    [SearchService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
