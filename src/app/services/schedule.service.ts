import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscription, empty } from 'rxjs';
import { map, catchError, finalize, tap } from 'rxjs/operators';
import { Schedule } from './schedule';


@Injectable()
export class ScheduleService {

  public busy = false;

  public currentList: Array<Schedule> = [];

  private MS_TO_SECONDS = 1 / 1000;
  private MILLISECONDS_IN_A_DAY = 60 * 60 * 24;
  private HALF_AN_HOUR_IN_SECONDS = 1800;

  private subscription: Subscription;

  constructor(private http: HttpClient) { }

  refresh(parameterDate: Date) {

    console.log('Refreshing...');

    this.busy = true;

    let newDate = new Date(parameterDate);

    const startDate = Math.floor(newDate.getTime() * this.MS_TO_SECONDS) - this.HALF_AN_HOUR_IN_SECONDS;
    // Starting next day
    newDate.setDate(newDate.getDate() + 1);
    newDate.setHours(0, 0, 0, 0);
    const endDate = Math.floor(newDate.getTime() * this.MS_TO_SECONDS);

    const url = `https://www.fcjs.unl.edu.ar/aulas/service/webapp.php?callback=callback&act=getTimestamp&timestampDesde=${startDate}&timestampHasta=${endDate}`;
    
    const call = this.http.jsonp(url, 'callback').pipe(
      catchError(err => {
        this.busy = false;
        return [];
      }),
      tap(response => {
        const results = [];
        for (let key in response) {
          const json = response[key];
          const start = parseInt(json[0]) * 1000;
          const end = parseInt(json[1]) * 1000;
          const location = json[2];
          const name = json[3];
          const who = json[4];
          const state = parseInt(json[5]) === 0;
          const schedule = new Schedule(start, end, location, name, who, state);
          results.push(schedule);
        }
        this.currentList = results;
        this.busy = false;
        return results;
      })
    );

    this.subscription = call.subscribe()
  }

}
