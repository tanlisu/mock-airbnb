import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InboxPage.prototype.ngOnInit = function () {
    };
    InboxPage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    InboxPage = tslib_1.__decorate([
        Component({
            selector: 'app-inbox',
            templateUrl: './inbox.page.html',
            styleUrls: ['./inbox.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], InboxPage);
    return InboxPage;
}());
export { InboxPage };
//# sourceMappingURL=inbox.page.js.map