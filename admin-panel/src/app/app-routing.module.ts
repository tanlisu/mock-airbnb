import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'service-providers', component: ServiceProviderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
