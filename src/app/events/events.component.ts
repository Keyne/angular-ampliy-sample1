import { Component, OnInit } from '@angular/core';
// import { AmplifyService } from 'aws-amplify-angular';
import { FormControl } from '@angular/forms';
import {
  startWith,
  map,
  debounceTime,
  switchMap,
  catchError
} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import awsconfig from '../../aws-exports';

import { Event } from './event.model';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  myControl = new FormControl();

  options: Event[] = [];
  filteredOptions: Observable<Event[]>;

  static displayFn(event?: any): string | undefined {
    console.log(event);
    return event ? event.body[0].event : of(null);
  }

  ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith<string | Event>(''),
          debounceTime(300),
          switchMap(value => {
            if ((value as any).length  >= 2) {
              return this.lookup(value.toString());
            } else {
              return of(null);
            }
          })
        );
  }

  lookup(value: string): Observable<Event> {
    return this.eventsService.search(value.toLowerCase()).pipe(
      map(results => {
        console.log(results);
        return results;
      }),
      // catch errors
      catchError(error => {
        return throwError(error);
      })
    );
  }


}
