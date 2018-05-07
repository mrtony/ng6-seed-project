import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
