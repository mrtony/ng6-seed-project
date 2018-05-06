import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: [],
  templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
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
