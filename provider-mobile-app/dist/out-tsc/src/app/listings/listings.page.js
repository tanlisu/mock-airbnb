import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
var ListingsPage = /** @class */ (function () {
    function ListingsPage(navCtrl, listingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.listings = [];
        this.getListings = function (listings) {
            _this.listings = listings;
        };
    }
    ListingsPage.prototype.ngOnInit = function () {
    };
    ListingsPage.prototype.ionViewWillEnter = function () {
        this.listingService.getListings(this.getListings);
    };
    ListingsPage.prototype.createNewListing = function () {
        this.navCtrl.navigateForward("new-listing");
    };
    ListingsPage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    ListingsPage.prototype.navToListingDetails = function (listing) {
        this.listingService.setCurrentListing(listing);
        this.navCtrl.navigateForward("listing-details");
    };
    ListingsPage.prototype.getTitle = function () {
        return this.listingService.getTitle();
    };
    ListingsPage.prototype.getLocation = function () {
        return this.listingService.getLocation();
    };
    ListingsPage.prototype.getDescription = function () {
        return this.listingService.getDescription();
    };
    ListingsPage.prototype.getNumberOfPeople = function () {
        return this.listingService.getNumberOfPeople();
    };
    ListingsPage.prototype.getPricePerNight = function () {
        return this.listingService.getPricePerNight();
    };
    ListingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-listings',
            templateUrl: './listings.page.html',
            styleUrls: ['./listings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService])
    ], ListingsPage);
    return ListingsPage;
}());
export { ListingsPage };
//# sourceMappingURL=listings.page.js.map