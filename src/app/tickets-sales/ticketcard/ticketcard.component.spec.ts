import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcardComponent } from './ticketcard.component';

describe('TicketcardComponent', () => {
  let component: TicketcardComponent;
  let fixture: ComponentFixture<TicketcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketcardComponent]
    });
    fixture = TestBed.createComponent(TicketcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
