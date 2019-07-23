import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BookNowPage } from './book-now.page';
var routes = [
    {
        path: '',
        component: BookNowPage
    }
];
var BookNowPageModule = /** @class */ (function () {
    function BookNowPageModule() {
    }
    BookNowPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BookNowPage]
        })
    ], BookNowPageModule);
    return BookNowPageModule;
}());
export { BookNowPageModule };
//# sourceMappingURL=book-now.module.js.map