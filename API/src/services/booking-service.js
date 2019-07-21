const bookings = require("../models/booking");

module.exports = class BookingService {
    
    constructor() {}

    getBookings() {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {    
            bookings.getAllBookings((res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    getBookingsByListingAndStatus(listingId, status) {
        return new Promise((resolve, reject) => {
            bookings.getBookingsByListingAndStatus(listingId, status, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    getBookingsByGuestAndStatus(guestId, status) {
        return new Promise((resolve, reject) => {
            bookings.getBookingsByGuestAndStatus(guestId, status, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    getBookingsByDate(dateStart, dateEnd) {
        return new Promise((resolve, reject) => {
            bookings.getBookingsByDate(dateStart, dateEnd, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    addBooking(bookingInfo) {
        return new Promise((resolve, reject) => {
            // check if there already exists a booking for this listing at this date
            bookings.getBookingsByListingAndDate(bookingInfo.listingId, bookingInfo.dateStart, bookingInfo.dateEnd, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // add booking
                    bookings.addBooking(bookingInfo, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });
                }
                else { // booking already exists
                    reject("Booking already exists");
                }
            })
        });
    }

    updateBooking(bookingInfo) {
        return new Promise((resolve, reject) => {
            // check if there exists a booking with this id
            bookings.getBookingByID(bookingInfo.id, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // no booking found
                    reject("Booking does not exist");
                }
                else { // update booking
                    bookings.updateBooking(bookingInfo.id, bookingInfo, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            console.log(res);
                            resolve(res);
                        }
                    });
                }
            });
        });
    }

    deleteBooking(id) {
        return new Promise((resolve, reject) => {
            // check if there exists a booking with this id
            bookings.getBookingByID(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // no booking found
                    reject("Booking does not exist");
                }
                else { // delete booking
                    bookings.deleteBooking(id, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            console.log(res);
                            resolve(res);
                        }
                    });
                }
            });
        });
    }
}