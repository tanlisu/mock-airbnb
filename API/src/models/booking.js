var mysqlConn = require("../database/database");

//Task object constructor
Booking = function(booking) {
  this.listingId = booking.listingId,
  this.guestId = booking.guestId,
  this.status = booking.status,
  this.dateStart = booking.dateStart,
  this.dateEnd = booking.dateEnd
};

Booking.getAllBookings = (result) => {
    mysqlConn.query("SELECT * FROM booking", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

Booking.getBookingByID = (id, result) => {
    mysqlConn.query("SELECT * FROM booking where id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Booking.getBookingsByListingAndStatus = (listingId, status, result) => {
    mysqlConn.query("SELECT * FROM booking where (listingId = ? AND status = ?)", [listingId, status], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Booking.getBookingsByGuestAndStatus = (guestId, status, result) => {
    mysqlConn.query("SELECT * FROM booking where (guestId = ? AND status = ?)", [guestId, status], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Booking.getBookingsByDate = (dateStart, dateEnd, result) => {
    mysqlConn.query("SELECT * FROM booking where (dateStart = ? AND dateEnd = ?)", [dateStart, dateEnd], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Booking.getBookingsByListingAndDate = (listingId, dateStart, dateEnd, result) => {
    mysqlConn.query("SELECT * FROM booking where (listingId = ? AND dateStart = ? AND dateEnd = ?)", [listingId, dateStart, dateEnd], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Booking.addBooking = (newBooking, result) => {
    mysqlConn.query("INSERT INTO booking set ?", newBooking, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

Booking.updateBooking = (id, booking, result) => {
    mysqlConn.query("UPDATE booking SET ? WHERE id = ?", [booking, id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

Booking.deleteBooking = (id, result) => {
    mysqlConn.query("DELETE FROM booking WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

module.exports = Booking;