import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    ProfilePage.prototype.getName = function () {
        return this.userService.getName();
    };
    ProfilePage.prototype.getSurname = function () {
        return this.userService.getSurname();
    };
    ProfilePage.prototype.getEmail = function () {
        return this.userService.getEmail();
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UserService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map