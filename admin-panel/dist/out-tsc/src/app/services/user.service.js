import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    addUser(user) {
        this.users.push(user);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map