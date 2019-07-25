import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewListingPage } from './new-listing.page';
var routes = [
    {
        path: '',
        component: NewListingPage
    }
];
var NewListingPageModule = /** @class */ (function () {
    function NewListingPageModule() {
    }
    NewListingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewListingPage]
        })
    ], NewListingPageModule);
    return NewListingPageModule;
}());
export { NewListingPageModule };
//# sourceMappingURL=new-listing.module.js.map