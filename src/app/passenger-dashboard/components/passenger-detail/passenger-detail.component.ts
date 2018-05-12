import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

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
  @Output() view: EventEmitter<Passenger>;

  constructor() {
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.view = new EventEmitter();
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
    this.view.emit(this.detail);
  }

}
