import { switchMap } from 'rxjs/operators';
import { Passenger } from './../../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap((data: {id: number}) =>
      this.passengerService
      .getPassenger(data.id))
    )
    .subscribe((data) => {
      this.passenger = data;
    });
  }

  onUpdate(event: Passenger) {
    this.passengerService
    .updatePassenger(event)
    .subscribe((data) => {
      this.passenger = {...this.passenger, ...event};
    });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
