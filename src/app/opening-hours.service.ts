import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface OpeningHoursDetails {
  [key: string]: WeekDetails;
}
export interface WeekDetails {
  close:  boolean;
  open24hrs: boolean;
  timings: TimingValues[]
}
export interface TimingValues {
  from: string;
  to: string;
}
@Injectable({
  providedIn: 'root'
})
export class OpeningHoursService {
  daysList: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  openingHoursDetails$ = new BehaviorSubject<OpeningHoursDetails|null>(null);
  constructor() { }
}
