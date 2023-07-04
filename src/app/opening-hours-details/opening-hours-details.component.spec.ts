import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningHoursDetailsComponent } from './opening-hours-details.component';

describe('OpeningHoursDetailsComponent', () => {
  let component: OpeningHoursDetailsComponent;
  let fixture: ComponentFixture<OpeningHoursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningHoursDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningHoursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
