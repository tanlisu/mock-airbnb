import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
import { UserService } from '../services/user.service';
var UpdateListingPage = /** @class */ (function () {
    function UpdateListingPage(navCtrl, listingService, userService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.userService = userService;
    }
    UpdateListingPage.prototype.ngOnInit = function () {
    };
    UpdateListingPage.prototype.ionViewWillEnter = function () {
        this.title = this.listingService.getTitle();
        this.location = this.listingService.getLocation();
        this.numberOfPeople = this.listingService.getNumberOfPeople();
        this.pricePerNight = this.listingService.getPricePerNight();
        this.description = this.listingService.getDescription();
    };
    UpdateListingPage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    UpdateListingPage.prototype.navToListingDetails = function () {
        this.navCtrl.navigateForward("listing-details");
    };
    UpdateListingPage.prototype.updateListing = function () {
        var _this = this;
        var listingInfo = {
            id: this.listingService.getCurrentListing().getId(),
            title: this.title,
            location: this.location,
            numberOfPeople: this.numberOfPeople,
            pricePerNight: this.pricePerNight,
            description: this.description,
            hostId: this.userService.getId()
        };
        this.listingService.updateListing(listingInfo).subscribe(function (response) {
            console.log(listingInfo);
            console.log(response);
            _this.navCtrl.navigateForward("tabs/tabs/listings");
        });
    };
    UpdateListingPage = tslib_1.__decorate([
        Component({
            selector: 'app-update-listing',
            templateUrl: './update-listing.page.html',
            styleUrls: ['./update-listing.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService,
            UserService])
    ], UpdateListingPage);
    return UpdateListingPage;
}());
export { UpdateListingPage };
//# sourceMappingURL=update-listing.page.js.map