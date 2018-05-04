import { Component, OnInit } from '@angular/core';

interface Child {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children  ?: Array<Child>;
}

@Component({
  selector: 'app-ch5-render-flow',
  templateUrl: './ch5-render-flow.component.html',
  styleUrls: ['./ch5-render-flow.component.scss']
})
export class Ch5RenderFlowComponent implements OnInit {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];
  constructor() { }

  ngOnInit() {
  }

}
