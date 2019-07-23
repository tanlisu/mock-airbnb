import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BookingService = /** @class */ (function () {
    function BookingService() {
        this.bookings = [];
    }
    BookingService.prototype.addBooking = function (booking) {
        this.bookings.push(booking);
    };
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map