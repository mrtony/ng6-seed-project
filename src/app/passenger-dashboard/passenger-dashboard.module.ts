import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { ProductCountComponent } from './components/product-count/product-count.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PassengerDashboardComponent, ProductCountComponent, ProductDetailComponent],
  exports: [PassengerDashboardComponent]
})
export class PassengerDashboardModule { }
