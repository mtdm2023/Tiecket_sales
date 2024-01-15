import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
  @Input() username: string = "";
  @Input() phoneNumber: string = "";
  @Input() imageUrl: string = "";

}
