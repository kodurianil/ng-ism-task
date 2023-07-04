import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms'
import { OpeningHoursService } from '../opening-hours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css']
})
export class OpeningHoursComponent implements OnInit {

  openingHoursForm: FormGroup = this.fb.group({});
  daysList: string[] = [];
  constructor(
    private fb: FormBuilder,
    private ohs: OpeningHoursService,
    private router: Router
  ) {
    this.daysList = this.ohs.daysList;
  }
  ngOnInit() {
    this.daysList.forEach(weekName => {
      this.openingHoursForm.addControl(weekName, this.createDayFormroup(weekName));
    });
    console.log(this.openingHoursForm);
  }

  getOpeningHoursWeek(weekName: string) {
    return (this.openingHoursForm.get(weekName) as FormGroup);
  }
  get openingHoursControls() {
    return this.openingHoursForm.controls;
  }
  getTimings(control: FormGroup) {
    return (control.get('timings') as FormArray);
  }
  getTimingControls(control: string) {
    return this.getTimings(this.getOpeningHoursWeek(control)).controls as FormGroup[];
  }
  createDayFormroup(control: string) {
    return this.fb.group({
      close: [],
      open24hrs: [],
      timings: this.fb.array([
        this.createTimingsGroup()
      ])
    })
  }

  createTimingsGroup() {
    return this.fb.group({
      from: [''],
      to: ['']
    });
  }

  addTiming(control: string) {
    this.getTimings(this.getOpeningHoursWeek(control)).push(this.createTimingsGroup());
  }
  removeTiming(ti: number, control: string) {
    this.getTimings(this.getOpeningHoursWeek(control)).removeAt(ti);
  }

  submitForm() {
    console.log(this.openingHoursForm.value);
    this.ohs.openingHoursDetails$.next(this.openingHoursForm.value);
    this.router.navigate(['/opening-hours-details']);
  }
  resetForm() {
    this.openingHoursForm.reset();
  }

  setValueForControl(group: FormGroup, controlName: string, value: any) {
    group.get(controlName)?.setValue(value);
  }
  copyToAll() {
    const weekGroup = this.getOpeningHoursWeek(this.daysList[0]) as FormGroup;
    const formTOGroup = this.getTimings(weekGroup)
    if (formTOGroup?.length) {
      for (let timingCount = 0; timingCount < formTOGroup.length; timingCount++) {
        const value = formTOGroup.at(timingCount).value;
        for (let i = 0; i < this.daysList.length; i++) {
          if (i === 0) {
            continue;
          }
          const timingGroup: FormGroup = this.getTimingControls(this.daysList[i])[timingCount];
          if (timingGroup) {
            this.setValueForControl(timingGroup, 'from', value.from);
            this.setValueForControl(timingGroup, 'to', value.to);
          }
        }
      }
    }
  }
}