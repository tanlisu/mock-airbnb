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
            { path: 'listings', loadChildren: '../listings/listings.module#ListingsPageModule' },
            { path: 'bookings', loadChildren: '../bookings/bookings.module#BookingsPageModule' },
            { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxPageModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/listings',
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