import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ServiceProviderComponent = class ServiceProviderComponent {
    constructor() {
        this.serviceProviders = [
            {
                name: 'Joe',
                lastName: 'Soap',
                email: 'joe@mail.com',
                cellPhone: 828073593,
                numberOfListings: 5
            },
            {
                name: 'John',
                lastName: 'Doe',
                email: 'john@mail.com',
                cellPhone: 828073545,
                numberOfListings: 15
            }
        ];
    }
    ngOnInit() {
    }
};
ServiceProviderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-service-provider',
        templateUrl: './service-provider.component.html',
        styleUrls: ['./service-provider.component.scss']
    })
], ServiceProviderComponent);
export { ServiceProviderComponent };
//# sourceMappingURL=service-provider.component.js.map