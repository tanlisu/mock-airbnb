import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BookingsPage } from './bookings.page';
var routes = [
    {
        path: '',
        component: BookingsPage
    }
];
var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BookingsPage]
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());
export { BookingsPageModule };
//# sourceMappingURL=bookings.module.js.map