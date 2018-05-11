import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input() detail: Passenger;
  editing = false;

  @Output() edit: EventEmitter<Passenger>;
  @Output() remove: EventEmitter<Passenger>;

  constructor(private routes: Router) {
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.detail = {...changes['detail'].currentValue};
  }

  ngOnInit() {
  }

  onNameChange(name: string): void {
    this.detail.fullname = name;
  }

  toggleEdit(): void {
    this.editing = !this.editing;
    if (!this.editing) {// 表示是done
      this.edit.emit(this.detail);
    }
  }

  onRemove(): void {
    this.remove.emit(this.detail);
  }

  onView() {
    // /passenger/1
    this.routes.navigate(['/passengers', this.detail.id]);
  }

}
