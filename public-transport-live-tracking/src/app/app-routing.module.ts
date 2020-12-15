import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { AvailableServicesComponent } from './available-services/available-services.component';
import { RouteselectorComponent } from './routeselector/routeselector.component';

const routes: Routes = [{ path: "", component: RouteselectorComponent },{ path: "route", component: AvailableServicesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
