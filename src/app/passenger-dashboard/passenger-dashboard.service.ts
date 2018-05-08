import { Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Passenger } from './../models/passenger.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from 'selenium-webdriver/ie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const API_HOST = environment.production ? '' : 'http://localhost:3000';
const PASSENGER_API = `${API_HOST}/api/passengers`;

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private httpClient: HttpClient) { }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient
      .get<Passenger[]>(PASSENGER_API);
      // .pipe(
      //   retry(3),
      //   catchError((err, caught) => {
      //     console.log(err);
      //     return caught;
      //   })
      // );
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.httpClient
      .get<Passenger>(`${PASSENGER_API}/${id}`);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
    .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, httpOptions);
  }

  removePassenger(passenger: Passenger): Observable<void> {
    return this.httpClient
    .delete<void>(`${PASSENGER_API}/${passenger.id}`);
  }
}
