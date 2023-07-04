import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { OpeningHoursDetailsComponent } from './opening-hours-details/opening-hours-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'opening-hours-form',
    pathMatch: 'full'
  },
  {
    path: 'opening-hours-form',
    component: OpeningHoursComponent
  },
  {
    path: 'opening-hours-details',
    component: OpeningHoursDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
