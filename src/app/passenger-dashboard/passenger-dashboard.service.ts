import { Passenger } from './../models/passenger.interface';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

const PASSENGER_API = 'http://localhost:3000/api/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private http: Http) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .pipe(
        map<Response, Passenger[]>((response: Response) => response.json())
      );
  }
}
