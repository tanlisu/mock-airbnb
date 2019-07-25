import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'listing-details', loadChildren: './listing-details/listing-details.module#ListingDetailsPageModule' },
    { path: 'listings', loadChildren: './listings/listings.module#ListingsPageModule' },
    { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
    { path: 'update-listing', loadChildren: './update-listing/update-listing.module#UpdateListingPageModule' },
    { path: 'new-listing', loadChildren: './new-listing/new-listing.module#NewListingPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map