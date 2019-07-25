import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
var ListingService = /** @class */ (function () {
    function ListingService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.listings = [];
    }
    ListingService.prototype.setCurrentListing = function (listing) {
        this.currentListing = listing;
    };
    ListingService.prototype.getListings = function (listingCallback) {
        this.setListingsFromDB(listingCallback);
    };
    // gets the listings by this host from the database and stores them
    ListingService.prototype.setListingsFromDB = function (listingCallback) {
        var _this = this;
        var hostId = this.userService.getId();
        this.listings = [];
        this.http.get('http://localhost:5000/listings/' + hostId).subscribe(function (response) {
            console.log(response);
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var listing = _a[_i];
                var newListing = new Listing(listing.title, listing.location, listing.description, listing.numberOfPeople, listing.pricePerNight);
                newListing.setId(listing.id);
                newListing.setHostId(listing.hostId);
                _this.listings.push(newListing);
                listingCallback(_this.listings);
            }
            console.log(_this.listings);
        });
    };
    // post a listing
    ListingService.prototype.addListing = function (listingInfo) {
        var newListing = new Listing(listingInfo.title, listingInfo.location, listingInfo.description, listingInfo.numberOfPeople, listingInfo.pricePerNight);
        this.listings.push(newListing);
        return this.http.post('http://localhost:5000/listings/add', listingInfo);
    };
    // update a listing
    ListingService.prototype.updateListing = function (listingInfo) {
        var newListing = new Listing(listingInfo.title, listingInfo.location, listingInfo.description, listingInfo.numberOfPeople, listingInfo.pricePerNight);
        debugger;
        this.listings = this.listings.filter(function (x) { x.getId() != listingInfo.id; });
        debugger;
        this.listings.push(newListing);
        return this.http.post('http://localhost:5000/listings/update', listingInfo);
    };
    // functions to get info about the current listing:
    ListingService.prototype.getCurrentListing = function () {
        return this.currentListing;
    };
    ListingService.prototype.getListingId = function () {
        return this.currentListing.getId();
    };
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
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UserService])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map