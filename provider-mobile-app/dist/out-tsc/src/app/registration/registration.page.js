import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/auth.service';
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, alertController, authenticationService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
    }
    RegistrationPage.prototype.ngOnInit = function () {
    };
    RegistrationPage.prototype.register = function () {
        var _this = this;
        // make sure the user enters all required fields
        if ((this.name != undefined) && (this.surname != undefined) && (this.email != undefined) && (this.password != undefined)) {
            this.authenticationService.register(this.name, this.surname, this.email, this.password).subscribe(function (response) {
                console.log(response);
                if (response.success) {
                    _this.authenticationService.setToken(response.data);
                    _this.navCtrl.navigateForward("tabs/tabs/listings");
                }
                else {
                    _this.presentAlert();
                }
            });
        }
    };
    RegistrationPage.prototype.backToLogin = function () {
        this.navCtrl.navigateForward("login");
    };
    RegistrationPage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Email is already in use. Please choose another one.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegistrationPage = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.page.html',
            styleUrls: ['./registration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertController,
            AuthenticationService])
    ], RegistrationPage);
    return RegistrationPage;
}());
export { RegistrationPage };
//# sourceMappingURL=registration.page.js.map