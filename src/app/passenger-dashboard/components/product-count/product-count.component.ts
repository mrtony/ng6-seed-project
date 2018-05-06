import { Passenger } from './../../../models/passenger.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-count',
  template: `
    <div>
      <h3 class="font-bold">Airline Passengers</h3>
      <h3>
        Total Passengers: {{ items?.length}}
      </h3>
      <h4 class="text-green">
        Total Checked-In: {{ checkedInCount() }} / {{ items?.length}}
      </h4>
    </div>
  `,
  styles: []
})
export class ProductCountComponent implements OnInit {
  @Input() items: Passenger[];

  constructor() { }

  ngOnInit() {
  }

  checkedInCount(): number {
    if (this.items) {
      return this.items.filter((p) => p.checkedIn).length;
    }
  }

}
