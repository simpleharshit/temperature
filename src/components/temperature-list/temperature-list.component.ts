import { Component, ElementRef, OnInit } from '@angular/core';

import * as moment from 'moment';

import { TemperatureService } from './temperature-list.service';
import { TreeError } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'temperature-list',
  templateUrl: './temperature-list.component.html',
  styleUrls: ['./temperature-list.component.css'],
  providers: [TemperatureService]
})

export class TemperatureListComponent implements OnInit {
  public title = 'temperature-list  ';
  public temperatures = [];
  public moment: moment.Moment;

  constructor(protected elementRef: ElementRef, private _temperatureService: TemperatureService) {

  }

  ngOnInit(): void {
    this.temperatures = [{ temperature: 15, date: moment("2017-11-03").format("MMM DD, YYYY") },
    { temperature: 18, date: moment("2017-10-25").format("MMM DD, YYYY") },
    { temperature: 23, date: moment("2017-10-22").format("MMM DD, YYYY") },
    { temperature: 12, date: moment("2017-10-19").format("MMM DD, YYYY") }];

    this.elementRef.nativeElement.addEventListener('add', (data) => {
      this.addTemperature(data.detail);
    });

    // this.getTemperaturesFromYahoo();
  }

  getTemperaturesFromYahoo() {
    this._temperatureService.getTemperatures().then(values => {
      console.log(values);
    });
  }

  addTemperature(temperature: any) {
    if (temperature > 0) {
      this.temperatures.push({
        temperature: temperature, date: moment().format("MMM DD, YYYY")
      });
    }

    var temperatureStatsElement = this.elementRef.nativeElement.parentElement.parentElement.querySelectorAll("temperature-stats");

    if (temperatureStatsElement && temperatureStatsElement.length > 0) {
      temperatureStatsElement[0].dispatchEvent(new CustomEvent('calculate', {
        bubbles: true,
        detail: this.temperatures
      }));
    }
  }
}