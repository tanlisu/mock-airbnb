import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';
var BookingService = /** @class */ (function () {
    function BookingService(userService, listingService, http) {
        this.userService = userService;
        this.listingService = listingService;
        this.http = http;
        this.bookings = [];
        this.listingIds = [];
    }
    BookingService.prototype.getBookings = function (bookingCallback) {
        this.setBookingsFromDB(bookingCallback);
    };
    // gets the bookings by this host from the database and stores them
    BookingService.prototype.setBookingsFromDB = function (bookingCallback) {
        var _this = this;
        var hostId = this.userService.getId();
        this.http.get('http://localhost:5000/listings/' + hostId).subscribe(function (response) {
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var listing = _a[_i];
                _this.listingIds.push(listing.id);
            }
            _this.bookings = [];
            console.log(_this.listingIds);
            _this.listingIds.forEach(function (listingId) {
                _this.getPendingBookings(listingId);
            });
            bookingCallback(_this.bookings);
        });
    };
    BookingService.prototype.getPendingBookings = function (listingId) {
        var _this = this;
        this.http.get('http://localhost:5000/bookings/listing/' + listingId + '/pending').subscribe(function (response) {
            console.log(response);
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var booking = _a[_i];
                var newBooking = new Booking(booking.status, booking.dateStart, booking.dateEnd);
                newBooking.setId(booking.id);
                newBooking.setListingId(booking.listingId);
                newBooking.setGuestId(booking.guestId);
                _this.bookings.push(newBooking);
            }
            _this.getAcceptedBookings(listingId);
        });
    };
    BookingService.prototype.getAcceptedBookings = function (listingId) {
        var _this = this;
        this.http.get('http://localhost:5000/bookings/listing/' + listingId + '/accepted').subscribe(function (response) {
            console.log(response);
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var booking = _a[_i];
                var newBooking = new Booking(booking.status, booking.dateStart, booking.dateEnd);
                newBooking.setId(booking.id);
                newBooking.setListingId(booking.listingId);
                newBooking.setGuestId(booking.guestId);
                _this.bookings.push(newBooking);
            }
            _this.getRejectedBookings(listingId);
        });
    };
    BookingService.prototype.getRejectedBookings = function (listingId) {
        var _this = this;
        this.http.get('http://localhost:5000/bookings/listing/' + listingId + '/rejected').subscribe(function (response) {
            console.log(response);
            for (var _i = 0, _a = Object.values(response); _i < _a.length; _i++) {
                var booking = _a[_i];
                var newBooking = new Booking(booking.status, booking.dateStart, booking.dateEnd);
                newBooking.setId(booking.id);
                newBooking.setListingId(booking.listingId);
                newBooking.setGuestId(booking.guestId);
                _this.bookings.push(newBooking);
            }
            console.log(_this.bookings);
        });
    };
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            ListingService,
            HttpClient])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map