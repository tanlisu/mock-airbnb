var Booking = /** @class */ (function () {
    function Booking(status, dateStart, dateEnd) {
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
    Booking.prototype.getListingId = function () {
        return this.listingId;
    };
    Booking.prototype.getGuestId = function () {
        return this.guestId;
    };
    Booking.prototype.getStatus = function () {
        return this.status;
    };
    Booking.prototype.getDateStart = function () {
        return this.dateStart;
    };
    Booking.prototype.getDateEnd = function () {
        return this.dateEnd;
    };
    return Booking;
}());
export { Booking };
//# sourceMappingURL=booking.js.map