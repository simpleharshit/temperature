import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { TemperatureComponent } from '../components/temperature/temperature.component';
import { TemperatureListComponent } from '../components/temperature-list/temperature-list.component';
import { TemperatureStatsComponent } from '../components/temperature-stats/temperature-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemperatureComponent,
    TemperatureListComponent,
    TemperatureStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
