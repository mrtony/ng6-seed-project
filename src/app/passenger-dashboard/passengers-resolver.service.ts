import { catchError, retry } from 'rxjs/operators';
import { Passenger } from './../models/passenger.interface';
import { PassengerDashboardModule } from './passenger-dashboard.module';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengersResolverService implements Resolve<Passenger[]> {

  constructor(private passengerService: PassengerDashboardService) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Passenger[]> {
    return this.passengerService
    .getPassengers()
    .pipe(
      retry(2),
      catchError((err, caught) => {
        // tslint:disable-next-line:no-debugger
        debugger;
        // return throwError([]);
        const errorPassenger: Partial<Passenger> = { id: -1};
        return of([errorPassenger as Passenger]);
      })
    );
    // .pipe(
    //   retry(5),
    //   catchError((err, caught) => {
    //     console.log('passenger resolver error:', err);
    //     return [];
    //   })
    // );
  }
}
