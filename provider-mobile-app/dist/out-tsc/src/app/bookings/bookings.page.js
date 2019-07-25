import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
var BookingsPage = /** @class */ (function () {
    function BookingsPage(navCtrl, bookingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.bookingService = bookingService;
        this.bookings = [];
        this.getBookings = function (bookings) {
            _this.bookings = bookings;
        };
    }
    BookingsPage.prototype.ngOnInit = function () {
    };
    BookingsPage.prototype.ionViewWillEnter = function () {
        this.bookingService.getBookings(this.getBookings);
    };
    BookingsPage.prototype.logout = function () {
        this.navCtrl.navigateForward("login");
    };
    BookingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-bookings',
            templateUrl: './bookings.page.html',
            styleUrls: ['./bookings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            BookingService])
    ], BookingsPage);
    return BookingsPage;
}());
export { BookingsPage };
//# sourceMappingURL=bookings.page.js.map