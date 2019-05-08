import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
