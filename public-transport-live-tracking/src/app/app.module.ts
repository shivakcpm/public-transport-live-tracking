import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlacesComponent } from './places/places.component';
import { AvailableServicesComponent } from './available-services/available-services.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule, MatIconModule,MatInputModule,MatOptionModule,MatAutocompleteModule,MatFormFieldModule,MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouteselectorComponent } from './routeselector/routeselector.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    AvailableServicesComponent,
    HeaderComponent,
    FooterComponent,
    RouteselectorComponent,
    FilterPipe
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "",
      libraries: ["places"]
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatButtonModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
