import { Component, OnInit } from '@angular/core';
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
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
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
  constructor() { }

  ngOnInit() {
  }

}
