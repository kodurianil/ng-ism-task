import { Component, OnInit } from '@angular/core';
import { OpeningHoursDetails, OpeningHoursService } from '../opening-hours.service';

@Component({
  selector: 'app-opening-hours-details',
  templateUrl: './opening-hours-details.component.html',
  styleUrls: ['./opening-hours-details.component.css']
})
export class OpeningHoursDetailsComponent implements OnInit {
  openingHoursDetails!: OpeningHoursDetails | null;
  daysList: string[] = [];
  constructor(
    private ohs: OpeningHoursService
  ) {

  }
  ngOnInit(): void {
    this.daysList = this.ohs.daysList;
    this.ohs.openingHoursDetails$.subscribe(details => {
      console.log(details);
      this.openingHoursDetails = details;
    });
  }
}
