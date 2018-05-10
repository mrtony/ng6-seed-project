import { Passenger, Baggage } from './../../../models/passenger.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  @Input() detail: Passenger;
  baggage: Baggage[];

  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {
    this.baggage = [{
      key: 'none',
      value: 'No baggage'
    }, {
      key: 'hand-only',
      value: 'Hand baggage'
    }, {
      key: 'hold-only',
      value: 'Hold baggage'
    }, {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }];
  }

  ngOnInit() {
  }

  toggleCheckIn(checkIn: boolean): void {
    if (checkIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, valid: boolean) {
    if (valid) {
      this.update.emit(passenger);
    }
  }

}
