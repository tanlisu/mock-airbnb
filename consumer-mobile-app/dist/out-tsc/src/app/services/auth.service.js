import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ResponseObject = /** @class */ (function () {
    function ResponseObject() {
    }
    return ResponseObject;
}());
export { ResponseObject };
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('http://localhost:5000/auth/login', { email: email, password: password });
    };
    AuthenticationService.prototype.register = function (name, surname, email, password) {
        return this.http.post('http://localhost:5000/auth/register', { name: name, surname: surname, email: email, password: password, role: "guest" });
    };
    AuthenticationService.prototype.getToken = function () {
        return this.token;
    };
    AuthenticationService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=auth.service.js.map