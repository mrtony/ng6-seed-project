import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnInit {
  @Input() detail: Passenger;
  editing = false;

  @Output() edit: EventEmitter<Passenger>;
  @Output() remove: EventEmitter<Passenger>;

  constructor() {
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
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

}
