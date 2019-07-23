const express = require("express");
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// get all
router.get("/", (req, res) => {
    // asynchronous function call structure 
    listingServer.getListings().then(listings => {
        res.json(listings);
    }).catch(err => {
        res.json(err);
    });
});

// get by host id
router.get("/:hostId", (req, res) => {
    // asynchronous function call structure 
    listingServer.getListingByHostID(req.params.hostId).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// add
router.post("/add", (req, res) => {
    // asynchronous function call structure 
    listingServer.addListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// update
router.post("/update", (req, res) => {
    // asynchronous function call structure
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// delete
router.delete("/delete/:id", (req, res) => {
    // asynchronous function call structure 
    listingServer.deleteListing(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;