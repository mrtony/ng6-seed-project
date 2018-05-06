import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ch5RenderFlowComponent } from './ch5-render-flow/ch5-render-flow.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    Ch5RenderFlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Customer Modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
