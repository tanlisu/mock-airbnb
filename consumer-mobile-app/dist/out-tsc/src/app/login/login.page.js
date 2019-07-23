import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/auth.service';
import { UserService } from '../services/user.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertController, authenticationService, userService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
        this.userService = userService;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.email, this.password).subscribe(function (response) {
            console.log(response);
            if (response.success) {
                _this.authenticationService.setToken(response.data);
                _this.userService.setCurrentUser(response.user[0].name, response.user[0].surname, response.user[0].email, response.user[0].password);
                _this.navCtrl.navigateForward("tabs/tabs/explore");
            }
            else {
                _this.presentAlert();
            }
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.navigateForward("registration");
    };
    LoginPage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Incorrect email and/or password.',
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
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertController,
            AuthenticationService,
            UserService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map