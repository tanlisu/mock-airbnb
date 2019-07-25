const listings = require("../models/listing");

module.exports = class ListingService {
    
    constructor() {}

    getListings() {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {    
            listings.getAllListings((res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    getListingByHostID(id) {
        return new Promise((resolve, reject) => {
            console.log("getListingByHostID inside")
            console.log(id);
            listings.getListingByHostID(id, (res, err) => {
                console.log("after getListingByHostID has run");
                console.log(res);
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    addListing(listingInfo) {
        return new Promise((resolve, reject) => {
            // check if there already exists a listing with this title by this host
            listings.getListingByHostID(listingInfo.hostId, (res, err) => {
                if (err) {
                    reject(err);
                }
                listings.getListingByTitle(listingInfo.title, (res, err) => {
                    if (err) {
                        reject(err);
                    }
                    console.log(res);
                    if (res.length == 0) { // add listing
                        listings.addListing(listingInfo, (res, err) => {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(res);
                            }
                        });
                    }
                    else { // listing already exists
                        reject("Listing already exists");
                    }
                });
            });
        });
    }

    updateListing(listingInfo) {
        return new Promise((resolve, reject) => {
            // check if there exists a listing with this id
            listings.getListingByID(listingInfo.id, (res, err) => {

                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // no listing found
                    reject("Listing does not exist");
                }
                else { // update listing

                    listings.updateListing(listingInfo.id, listingInfo, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });
                }
            });
        });
    }

    deleteListing(id) {
        return new Promise((resolve, reject) => {
            // check if there exists a listing with this id
            listings.getListingByID(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // no listing found
                    reject("Listing does not exist");
                }
                else { // delete listing
                    listings.deleteListing(id, (res, err) => {
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