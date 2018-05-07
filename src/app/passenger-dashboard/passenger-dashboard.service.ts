import { environment } from './../../environments/environment';
import { Passenger } from './../models/passenger.interface';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

const API_HOST = environment.production ? '' : 'http://localhost:3000';
const PASSENGER_API = `${API_HOST}/api/passengers`;

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
