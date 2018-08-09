import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TemperatureService {
    constructor(
        private http: Http,
        private httpClient: HttpClient,
        private jsonp: Jsonp) { }

    getTemperatures(): any {
        return this.jsonp.request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22montreal%2C%20qc%22)&format=json&callback=JSON_CALLBACK")
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        return response.json() || {};
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}