import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import awsconfig from '../aws-exports';

import { Event } from './events/event.model';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http: HttpClient) {}

  search(query: string): Observable<Event> {
    const url = awsconfig.aws_cloud_logic_custom[0].endpoint + '/events';
    return this.http
      .get<Event>(url, {
        observe: 'response',
        params: {
          q: query,
          sort: 'stars',
          order: 'desc'
        }
      })
      .pipe(
        map((res: HttpResponse<Event>) => {
          console.log(res);
          return res.body as Event;
        })
      );
  }
}
