import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InPlayComponent } from './in-play/in-play.component';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';

const routes: Routes = [
  { path : '', component : InPlayComponent },
  { path : 'in-play', component : InPlayComponent },
  { path : 'today', component : TodayComponent },
  { path : 'tomorrow', component : TomorrowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
