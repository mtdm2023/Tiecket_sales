

interface userdata{
  name: any ;
  phone: any;
  imageUrl: any;
}
 interface ticketcarddata {
  tichetNumberDescription: any;
  TicketSize: any;
  type: any;
}

export interface Tickets {
  _user: userdata;
  ticketNumber: any;
  ticketValue: any;
  Cinemas: string;
  numberofPersons: number;
  numberofSales: string;
  ticketdata: ticketcarddata;

}

