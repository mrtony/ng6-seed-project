import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: [],
  templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private routes: Router,
    private passengerService: PassengerDashboardService) {
  }

  ngOnInit() {
    this.passengerService
    .getPassengers()
    .subscribe((data) => {
      this.passengers = data;
    }, (error) => {
      console.log(error);
    });
  }

  handleEdit(event: Passenger): void {
    this.passengerService
    .updatePassenger(event)
    .subscribe((data) => {
      this.passengers = this.passengers.map((p) => {
        // 建立immutable object
        if (p.id === data.id) {
          p = { ...p, ...data};
        }
        return p;
      });
    });
  }

  handleRemove(event: Passenger): void {
    this.passengerService
    .removePassenger(event)
    .subscribe(() => {
      this.passengers = this.passengers.filter((p) => p.id !== event.id);
    });
  }

  handleView(event: Passenger) {
    // /passenger/1
    this.routes.navigate(['/passengers', event.id]);
  }
}
