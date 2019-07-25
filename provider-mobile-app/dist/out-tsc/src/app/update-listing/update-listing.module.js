import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateListingPage } from './update-listing.page';
var routes = [
    {
        path: '',
        component: UpdateListingPage
    }
];
var UpdateListingPageModule = /** @class */ (function () {
    function UpdateListingPageModule() {
    }
    UpdateListingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateListingPage]
        })
    ], UpdateListingPageModule);
    return UpdateListingPageModule;
}());
export { UpdateListingPageModule };
//# sourceMappingURL=update-listing.module.js.map