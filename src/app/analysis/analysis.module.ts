import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { CharttComponent } from './chartt/chartt.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';

import {ClipboardModule} from '@angular/cdk/clipboard'





@NgModule({
  declarations: [
   TicketCardComponent,
   CharttComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    QRCodeModule,
    ClipboardModule,
    TooltipModule
  ],
  exports:[
    TicketCardComponent,
    CharttComponent,

  ]
})
export class AnalysisModule { }
