import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { path: 'listings', loadChildren: '../listings/listings.module#ListingsPageModule' },
        { path: 'bookings', loadChildren: '../bookings/bookings.module#BookingsPageModule' },
        { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxPageModule' },
        { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/listings',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
