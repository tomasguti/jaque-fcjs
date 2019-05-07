import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, finalize, tap } from 'rxjs/operators';
import { Schedule } from './schedule';


@Injectable()
export class ScheduleService {

  public busy = false;

  public currentList: Array<Schedule> = [];

  private MS_TO_SECONDS = 1 / 1000;
  private SECONDS_IN_A_DAY = 60 * 60 * 24;

  constructor(private http: HttpClient) { }

  refresh(newDate: Date) {

    console.log('Refreshing...');

    this.busy = true;

    if (!newDate) {
      newDate = new Date();
    }

    const startDate = Math.floor(newDate.getTime() * this.MS_TO_SECONDS);
    const endDate = startDate + this.SECONDS_IN_A_DAY;

    const url = `https://www.fcjs.unl.edu.ar/aulas/service/webapp.php?callback=callback&act=getTimestamp&timestampDesde=${startDate}&timestampHasta=${endDate}`;
    
    return this.http.jsonp(url, 'callback').pipe(
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
    ).subscribe();
  }

}
