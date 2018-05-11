import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <h3>Not Found, <a routerLink="/">go Home?</a></h3>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
