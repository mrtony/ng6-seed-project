import { Passenger } from './../models/passenger.interface';
import { PassengerDashboardModule } from './passenger-dashboard.module';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PassengersResolverService implements Resolve<Passenger[]> {

  constructor(private passengerService: PassengerDashboardService) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Passenger[]> {
    return this.passengerService
    .getPassengers();
  }
}
