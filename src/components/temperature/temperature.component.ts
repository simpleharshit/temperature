import { Component, ElementRef, AfterViewInit } from '@angular/core';

import { TemperatureListComponent } from '../temperature-list/temperature-list.component';
import { TemperatureService } from '../temperature-list/temperature-list.service';

@Component({
  selector: 'temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  providers: [TemperatureService]
})
export class TemperatureComponent implements AfterViewInit {
  title = 'temperature';
  temperature: number;

  constructor(protected elementRef: ElementRef, private _temperatureService: TemperatureService) {

  }

  ngAfterViewInit(): void {
    this.addTemperature();
  }

  addTemperature() {
    this.elementRef.nativeElement.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.dispatchEvent(new CustomEvent('add', {
      bubbles: true,
      detail: this.temperature
    }));
  }
}
