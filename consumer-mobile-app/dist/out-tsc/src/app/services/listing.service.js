import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.setCurrentListing = function (listing) {
        this.currentListing = listing;
    };
    // returns an array of all listings in the database
    ListingService.prototype.getListings = function () {
        this.setListingsFromDB();
        return this.listings;
    };
    // gets the listings from the database and stores them
    ListingService.prototype.setListingsFromDB = function () {
        var _this = this;
        this.http.get('http://localhost:5000/listings').subscribe(function (response) {
            console.log(response);
            var listings = [];
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var listing = _a[_i];
                listings.push(listing);
            }
            _this.listings = listings;
        });
    };
    // functions to get info about the current listing:
    ListingService.prototype.getTitle = function () {
        return this.currentListing.getTitle();
    };
    ListingService.prototype.getLocation = function () {
        return this.currentListing.getLocation();
    };
    ListingService.prototype.getDescription = function () {
        return this.currentListing.getDescription();
    };
    ListingService.prototype.getNumberOfPeople = function () {
        return this.currentListing.getNumberOfPeople();
    };
    ListingService.prototype.getPricePerNight = function () {
        return this.currentListing.getPricePerNight();
    };
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map