import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListingDetailsPage } from './listing-details.page';
var routes = [
    {
        path: '',
        component: ListingDetailsPage
    }
];
var ListingDetailsPageModule = /** @class */ (function () {
    function ListingDetailsPageModule() {
    }
    ListingDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListingDetailsPage]
        })
    ], ListingDetailsPageModule);
    return ListingDetailsPageModule;
}());
export { ListingDetailsPageModule };
//# sourceMappingURL=listing-details.module.js.map