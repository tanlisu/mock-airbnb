const express = require("express");
const router = express.Router();

const BookingService = require('../services/booking-service');
const bookingServer = new BookingService();

// get all
router.get("/", (req, res) => {
    // asynchronous function call structure 
    bookingServer.getBookings().then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

// get all bookings for a certain listing and of a certain status
router.get("/listing/:listingId/:status", (req, res) => {
    // asynchronous function call structure 
    bookingServer.getBookingsByListingAndStatus(req.params.listingId, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get all bookings by a certain guest and of a certain status
router.get("/guest/:guestId/:status", (req, res) => {
    // asynchronous function call structure 
    bookingServer.getBookingsByGuestAndStatus(req.params.guestId, req.params.status).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get all bookings that start on a certain date and end on a certain date
router.get("/date/:dateStart/:dateEnd", (req, res) => {
    // asynchronous function call structure 
    bookingServer.getBookingsByDate(req.params.dateStart, req.params.dateEnd).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// add
router.post("/add", (req, res) => {
    // asynchronous function call structure 
    bookingServer.addBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// update
router.post("/update", (req, res) => {
    // asynchronous function call structure
    bookingServer.updateBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// delete
router.delete("/delete/:id", (req, res) => {
    // asynchronous function call structure 
    bookingServer.deleteBooking(req.params.id).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;