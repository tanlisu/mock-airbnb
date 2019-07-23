import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
var ListingDetailsPage = /** @class */ (function () {
    function ListingDetailsPage(navCtrl, listingService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
    }
    ListingDetailsPage.prototype.ngOnInit = function () {
    };
    ListingDetailsPage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    ListingDetailsPage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("tabs/tabs/explore");
    };
    ListingDetailsPage.prototype.book = function () {
    };
    ListingDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-listing-details',
            templateUrl: './listing-details.page.html',
            styleUrls: ['./listing-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService])
    ], ListingDetailsPage);
    return ListingDetailsPage;
}());
export { ListingDetailsPage };
//# sourceMappingURL=listing-details.page.js.map