import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private _http: HttpClient) { }
  dailyForecast() {
    const mapped = map((result) => result);
    const saved = mapped(this._http
      .get('localhost:3000/people'));
      return saved.subscribe(re => re);

  }
}
