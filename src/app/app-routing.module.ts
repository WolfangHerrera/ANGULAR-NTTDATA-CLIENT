import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './core/user/user.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
