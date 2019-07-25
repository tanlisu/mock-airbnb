import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
import { UserService } from '../services/user.service';
var NewListingPage = /** @class */ (function () {
    function NewListingPage(navCtrl, listingService, userService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.userService = userService;
    }
    NewListingPage.prototype.ngOnInit = function () {
    };
    NewListingPage.prototype.navToListings = function () {
        this.navCtrl.navigateForward("tabs/tabs/listings");
    };
    NewListingPage.prototype.createListing = function () {
        var _this = this;
        var listingInfo = {
            title: this.title,
            location: this.location,
            numberOfPeople: this.numberOfPeople,
            pricePerNight: this.pricePerNight,
            description: this.description,
            hostId: this.userService.getId()
        };
        this.listingService.addListing(listingInfo).subscribe(function (response) {
            console.log(listingInfo);
            console.log(response);
            _this.navCtrl.navigateForward("tabs/tabs/listings");
        });
    };
    NewListingPage = tslib_1.__decorate([
        Component({
            selector: 'app-new-listing',
            templateUrl: './new-listing.page.html',
            styleUrls: ['./new-listing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService,
            UserService])
    ], NewListingPage);
    return NewListingPage;
}());
export { NewListingPage };
//# sourceMappingURL=new-listing.page.js.map