var Booking = /** @class */ (function () {
    function Booking(status, dateStart, dateEnd) {
        this.listingId = 1;
        this.guestId = 1;
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
    Booking.prototype.isPending = function () {
        return this.status == 'pending';
    };
    Booking.prototype.isAccepted = function () {
        return this.status == 'accepted';
    };
    Booking.prototype.isRejected = function () {
        return this.status == 'rejected';
    };
    Booking.prototype.getId = function () {
        return this.id;
    };
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
    Booking.prototype.setId = function (id) {
        this.id = id;
    };
    Booking.prototype.setListingId = function (listingId) {
        this.listingId = listingId;
    };
    Booking.prototype.setGuestId = function (guestId) {
        this.guestId = guestId;
    };
    Booking.prototype.setStatus = function (status) {
        this.status = status;
    };
    Booking.prototype.setDateStart = function (dateStart) {
        this.dateStart = dateStart;
    };
    Booking.prototype.setDateEnd = function (dateEnd) {
        this.dateEnd = dateEnd;
    };
    return Booking;
}());
export { Booking };
//# sourceMappingURL=booking.js.map