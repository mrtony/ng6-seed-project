import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  nav: Nav[];
  loading: boolean;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });

    this.nav = [
      {
        link: '/',
        name: 'Home',
        exact: true
      },
      {
        link: '/passengers',
        name: 'Passenger',
        exact: true
      },
      {
        link: '/oops',
        name: '404',
        exact: false
      },
    ];
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart ||
        routerEvent instanceof NavigationError) {
      this.loading = true;
      console.log('routerEvent:', routerEvent);
      console.log('loading:', this.loading);
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel) {
        this.loading = false;
        console.log('routerEvent:', routerEvent);
        console.log('loading:', this.loading);
      }
  }
}
