import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightsDirective } from './highlights.directive';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import{ SearchService} from './search.service';
import{ ReactiveComponentModule } from '@ngrx/component';

import { CustomerComponent } from './customer/customer.component';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ImageslideComponent } from './imageslide/imageslide.component';
import { BoardingComponent } from './boarding/boarding.component';
import{ MatCardModule} from '@angular/material/card';
import{NbLayoutModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { BusinessDetailsComponent } from './boarding/components/business-details/business-details.component';
import { BusinessDetailsAboutComponent } from './boarding/components/business-details-about/business-details-about.component';
import { ChooseComponent } from './boarding/components/choose/choose.component';
import { ChooseCompanyComponent } from './boarding/components/choose-company/choose-company.component';
import { ChooseStateComponent } from './boarding/components/choose-state/choose-state.component';
import { HeaderComponent } from './boarding/components/header/header.component';
import { TeamComponent } from './boarding/components/team/team.component';




@NgModule({
  declarations: [
    AppComponent,
    HighlightsDirective,
    LoansComponent,
    AddLoansComponent,
    
    CustomerComponent,
    ImageslideComponent,
    BoardingComponent,
    BusinessDetailsComponent,
    BusinessDetailsAboutComponent,
    ChooseComponent,
    ChooseCompanyComponent,
    ChooseStateComponent,
    HeaderComponent,
    TeamComponent,
    
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    CarouselModule,
    MatCardModule,
    ReactiveComponentModule, CommonModule,
    NbLayoutModule, NbCardModule, NbSelectModule

  

  
  
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy,},
    [SearchService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
