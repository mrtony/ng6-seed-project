import { Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Passenger } from './../models/passenger.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
    .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger);
  }

  removePassenger(passenger: Passenger): Observable<void> {
    return this.httpClient
    .delete<void>(`${PASSENGER_API}/${passenger.id}`);
  }
}
