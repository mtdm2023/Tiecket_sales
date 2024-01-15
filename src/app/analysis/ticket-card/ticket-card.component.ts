import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls:['./ticket-card.component.css','./responsive.css']
})
export class TicketCardComponent {
  @Input()ticketCardExpirationText:string ="فعال حتي 15 يوليو 2023";
  @Input()ticketCardDiscountText:string ="خصم";
  @Input()ticketCardDiscountTextValue:string ="25%";
  @Input() teckettextUrl:any="www.tazkty.com/473847"


  copyToclipboard(){


  }
}
