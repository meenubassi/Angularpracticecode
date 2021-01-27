import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { Downloads } from './leads-listing/leads-tools/downloads.pdf/downloads.pdf.component';
import { Downloads } from './leads-listing/leads-tools/downloads.excel/downloads.excel.component';



@NgModule({
  declarations: [LeadsListingComponent, LeadsGridComponent, LeadsToolsComponent, Downloads.PdfComponent, Downloads.ExcelComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
