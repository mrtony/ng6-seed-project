import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: [],
  templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() { }

  ngOnInit() {
    this.passengers =   [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }];
  }

  handleEdit(event: Passenger): void {
    this.passengers = this.passengers.map((p) => {
      // 建立immutable object
      if (p.id === event.id) {
        p = { ...p, ...event};
      }
      return p;
    });
  }

  handleRemove(event: Passenger): void {
    this.passengers = this.passengers.filter((p) => p.id !== event.id);
  }
}
