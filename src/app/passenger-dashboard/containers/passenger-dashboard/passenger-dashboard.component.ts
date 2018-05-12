import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: [],
  templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  fetchDataError: boolean;

  constructor(private routes: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) {
      this.fetchDataError = false;
  }

  ngOnInit() {
    // 使用resolver的作法
    const checkPassengers: Passenger[] = this.route.snapshot.data['passengers'];
    if (checkPassengers && checkPassengers.length > 0) {
      if (checkPassengers[0].id === -1) {
        console.log('Error', checkPassengers[0]);
        this.fetchDataError = true;
      } else {
        this.passengers = [...this.route.snapshot.data['passengers']];
        this.fetchDataError = false;
      }
    }

    // 沒有用resolver的作法
    // this.passengerService
    // .getPassengers()
    // .subscribe((data) => {
    //   this.passengers = data;
    // }, (error) => {
    //   console.log(error);
    // });
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

  reloadPassengers() {
    this.passengerService
    .getPassengers()
    .subscribe((data) => {
      this.fetchDataError = false;
      this.passengers = [...data];
    }, (error) => {
      this.fetchDataError = true;
      console.log(error);
    });
  }
}
