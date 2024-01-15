import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketcardComponent } from './ticketcard/ticketcard.component';
import { UsercardComponent } from './usercard/usercard.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import{InputSwitchModule} from 'primeng/inputswitch'
import { TooltipModule } from 'primeng/tooltip';






@NgModule({
  declarations: [
    TicketsComponent,
    TicketcardComponent,
    UsercardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    InputSwitchModule,
    TooltipModule
  ],
  exports:
  [
    TicketcardComponent,
    UsercardComponent,
    TicketsComponent
  ]
})
export class TicketsSalesModule { }
