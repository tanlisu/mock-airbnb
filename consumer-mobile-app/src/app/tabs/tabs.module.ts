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
        { path: 'explore', loadChildren: '../explore/explore.module#ExplorePageModule' },
        { path: 'saved', loadChildren: '../saved/saved.module#SavedPageModule' },
        { path: 'trips', loadChildren: '../trips/trips.module#TripsPageModule' },
        { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxPageModule' },
        { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/explore',
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
