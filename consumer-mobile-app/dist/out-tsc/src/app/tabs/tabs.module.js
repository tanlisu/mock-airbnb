import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'explore', loadChildren: '../explore/explore.module#ExplorePageModule' },
            { path: 'saved', loadChildren: '../saved/saved.module#SavedPageModule' },
            { path: 'trips', loadChildren: '../trips/trips.module#TripsPageModule' },
            { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxPageModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/explore',
        pathMatch: 'full'
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map