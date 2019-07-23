import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, listingService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
    }
    ExplorePage.prototype.ngOnInit = function () {
    };
    ExplorePage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    ExplorePage.prototype.navToListingDetails = function (listing) {
        this.listingService.setCurrentListing(listing);
        this.navCtrl.navigateForward("tabs/tabs/explore");
    };
    ExplorePage.prototype.getListings = function () {
        return this.listingService.getListings();
    };
    ExplorePage.prototype.getTitle = function (listing) {
        return this.listingService.getTitle();
    };
    ExplorePage.prototype.getLocation = function () {
        return this.listingService.getLocation();
    };
    ExplorePage.prototype.getDescription = function () {
        return this.listingService.getDescription();
    };
    ExplorePage.prototype.getNumberOfPeople = function () {
        return this.listingService.getNumberOfPeople();
    };
    ExplorePage.prototype.getPricePerNight = function () {
        return this.listingService.getPricePerNight();
    };
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: './explore.page.html',
            styleUrls: ['./explore.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map