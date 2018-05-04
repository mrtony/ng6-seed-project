import { Component, OnInit } from '@angular/core';
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
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
    checkInDate: 1490742000000
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null
  }];
  constructor() { }

  ngOnInit() {
  }

}
