import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{PaginatorModule} from 'primeng/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TicketsSalesModule } from './tickets-sales/tickets-sales.module';
import { CommonModule } from '@angular/common';
import { AnalysisModule } from './analysis/analysis.module';
import { NgApexchartsModule } from 'ng-apexcharts';



import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PaginatorModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    TicketsSalesModule,
    AnalysisModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    QRCodeModule
  ],

  exports:[TicketsSalesModule,NgApexchartsModule,QRCodeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
