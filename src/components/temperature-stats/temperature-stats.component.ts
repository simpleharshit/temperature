import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-stats',
  templateUrl: './temperature-stats.component.html',
  styleUrls: ['./temperature-stats.component.css']
})

export class TemperatureStatsComponent implements OnInit {
  public title = 'temperature-list  ';

  constructor(protected elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('calculate', (data) => {
      this.calculateStats(data.detail);
    });
  }

  calculateStats(temperatureList) {
    var temperatures = [];

    temperatureList.map(item => {
      temperatures.push(item.temperature);
    });

    var arr = {
      max: function (array) {
        return Math.max.apply(null, array);
      },

      min: function (array) {
        return Math.min.apply(null, array);
      },

      sum: function (array) {
        var num = 0;
        for (var i = 0, l = array.length; i < l; i++) num += array[i];
        return num;
      },


    };

    var sum = temperatures.reduce(function (a, b) { return a + b; });

    this.elementRef.nativeElement.querySelector("#sAverage").innerHTML = sum / temperatures.length;
    this.elementRef.nativeElement.querySelector("#sMedian").innerHTML = this.median(temperatures);
    this.elementRef.nativeElement.querySelector("#sMin").innerHTML = Math.min(...temperatures);
    this.elementRef.nativeElement.querySelector("#sMax").innerHTML = Math.max(...temperatures);
  }

  median(array = []) {
    array.sort(function (a, b) {
      return a - b;
    });

    var mid = array.length / 2;

    return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
  }
}