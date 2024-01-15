import { Component, Input, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Tickets } from '../ticketsInterface';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css','./responsive.css']
})
export class TicketsComponent implements OnInit{
  ticketArr:Tickets[]=[];
   searchValue:any =  ""
   checked:boolean=false;
   activeState:string = "غير مفعلة"
  constructor(private ticketdataService:TicketsService)
  {

  }

  ngOnInit():void {
    this.ticketArr = this.ticketdataService.getTickets();

  }

  toggleActive()
  {
    if(this.checked===true)
    {
      this.activeState = "مفعلة";
    }
    else
    {
      this.activeState = "غير مفعلة";
    }
  }


  onSort(event:any){
      console.log(event)
      let newarr:Tickets[] =[];
       newarr =this.ticketArr.reverse()
      console.log(newarr);
      this.ticketArr = [];
      this.ticketArr.push(...newarr)

      console.log(this.ticketArr)

  }

  onsearch()
  {
    console.log(this.searchValue);
    let searchRes:Tickets[] = [];
    for(let i=0 ; i<this.ticketArr.length;i++)
    {
      console.log(this.ticketArr[i]._user.name)
      if(this.searchValue === this.ticketArr[i]._user.name)
      {

        searchRes[0]= this.ticketArr[i];
        this.ticketArr =[];
        this.ticketArr.push(...searchRes)
        setTimeout(() =>{
          this.ngOnInit();
                 },4000)
                 break;
                }


    }
  }


}
