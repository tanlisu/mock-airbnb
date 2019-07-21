var mysqlConn = require("../database/database");

//Task object constructor
Listing = function(listing) {
  this.title = listing.title;
  this.location = listing.location;
  this.description = listing.description;
  this.numberOfPeople = listing.numberOfPeople;
  this.pricePerNight = listing.pricePerNight;
  this.hostId = listing.hostId;
};

Listing.getAllListings = (result) => {
    mysqlConn.query("SELECT * FROM listing", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

Listing.getListingByID = (id, result) => {
    mysqlConn.query("SELECT * FROM listing where id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Listing.getListingByTitle = (title, result) => {
    mysqlConn.query("SELECT * FROM listing where title = ?", title, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Listing.getListingByHostID = (hostId, result) => {
    mysqlConn.query("SELECT * FROM listing where hostId = ?", hostId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

Listing.addListing = (newListing, result) => {
    mysqlConn.query("INSERT INTO listing set ?", newListing, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

Listing.updateListing = (id, listing, result) => {
    mysqlConn.query("UPDATE listing SET ? WHERE id = ?", [listing, id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

Listing.deleteListing = (id, result) => {
    mysqlConn.query("DELETE FROM listing WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

module.exports = Listing;