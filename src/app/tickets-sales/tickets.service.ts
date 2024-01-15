import { Injectable } from '@angular/core';
import { Tickets } from './ticketsInterface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

   public _tickets:Tickets[] = [];
  ticketnumber:number = 101;
  constructor() { }

  //here we will get Tickets from backend using HttpClientModule
  getTickets(): Array<Tickets>
  {

      for(let i=0 ; i<250 ; i++)
      {

        this._tickets.push({_user:{name:"محمد الغريب"+i,phone:"0123456789",imageUrl:"https://via.placeholder.com/30x30"}
        ,ticketNumber:"C-"+ this.ticketnumber++,ticketValue:"$"+ 40+i,
        Cinemas:"سينما مصر, مول العرب, برج الأطنان,سرايا القبة, صيدناوي مول, برجالعرب",numberofPersons:0,
        numberofSales:"مرة واحده",ticketdata:{tichetNumberDescription:"تذكرة رقم 45",TicketSize:"9mp",type:"PDF"}});


      }
      return this._tickets
  }

}
