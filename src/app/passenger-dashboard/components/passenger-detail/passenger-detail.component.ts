import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-passenger-detail',
  template: `
    <span class="status"
    [style.backgroundColor]="(detail.checkedIn? '#2ecc71' : '#c0392b')"></span>
    {{detail.fullname}}
    <p>Checked In Date:
      {{detail.checkedIn? (detail.checkInDate | date: 'y/MMMM/d' | uppercase):
      'Not checked in'}}
    </p>
    <div class="children">
        Children: {{detail.children?.length || 0 }}
    </div>
  `,
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnInit {
  @Input() detail: Passenger;

  constructor() {
  }

  ngOnInit() {
  }

}
