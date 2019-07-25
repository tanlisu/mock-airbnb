import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../../models/user';
let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
        this.displayForm = false;
        this.users = [
            {
                firstName: 'Joe',
                lastName: 'Soap',
                email: 'joe@mail.com',
                cellPhone: '28073593',
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@mail.com',
                cellPhone: '828073545',
            }
        ];
    }
    ngOnInit() {
    }
    toggleDisplayForm() {
        this.displayForm = !this.displayForm;
    }
    addUser() {
        let user = new User();
        user.setInfo(this.firstName, this.lastName, this.email, this.cellPhone);
        this.userService.getUsers().push(user);
        this.toggleDisplayForm();
    }
};
UserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map