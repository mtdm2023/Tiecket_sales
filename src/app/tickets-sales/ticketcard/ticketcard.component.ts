import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-ticketcard',
  templateUrl: './ticketcard.component.html',
  styleUrls: ['./ticketcard.component.css']
})
export class TicketcardComponent {

  @Input() ticketCardnumber: string = "";
  @Input() type: string = "";
  @Input() size: string = "";

}
