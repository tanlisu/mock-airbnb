import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User } from '../models/user';
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.setCurrentUser = function (name, surname, email, password) {
        this.currentUser = new User(name, surname, email, password);
    };
    UserService.prototype.getName = function () {
        return this.currentUser.getName();
    };
    UserService.prototype.getSurname = function () {
        return this.currentUser.getSurname();
    };
    UserService.prototype.getEmail = function () {
        return this.currentUser.getEmail();
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map