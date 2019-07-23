import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
var BookNowPage = /** @class */ (function () {
    function BookNowPage(navCtrl, alertController, bookingService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.bookingService = bookingService;
    }
    BookNowPage.prototype.ngOnInit = function () {
    };
    BookNowPage.prototype.createBooking = function () {
    };
    BookNowPage.prototype.navToListingDetails = function () {
        this.navCtrl.navigateForward("listing-details");
    };
    BookNowPage = tslib_1.__decorate([
        Component({
            selector: 'app-book-now',
            templateUrl: './book-now.page.html',
            styleUrls: ['./book-now.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertController,
            BookingService])
    ], BookNowPage);
    return BookNowPage;
}());
export { BookNowPage };
//# sourceMappingURL=book-now.page.js.map