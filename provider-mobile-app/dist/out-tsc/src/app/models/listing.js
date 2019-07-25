var Listing = /** @class */ (function () {
    function Listing(title, location, description, numberOfPeople, pricePerNight) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.numberOfPeople = numberOfPeople;
        this.pricePerNight = pricePerNight;
    }
    Listing.prototype.getId = function () {
        return this.id;
    };
    Listing.prototype.getHostId = function () {
        return this.hostId;
    };
    Listing.prototype.getTitle = function () {
        return this.title;
    };
    Listing.prototype.getLocation = function () {
        return this.location;
    };
    Listing.prototype.getDescription = function () {
        return this.description;
    };
    Listing.prototype.getNumberOfPeople = function () {
        return this.numberOfPeople;
    };
    Listing.prototype.getPricePerNight = function () {
        return this.pricePerNight;
    };
    Listing.prototype.setId = function (id) {
        this.id = id;
    };
    Listing.prototype.setHostId = function (hostId) {
        this.hostId = hostId;
    };
    Listing.prototype.setTitle = function (title) {
        this.title = title;
    };
    Listing.prototype.setLocation = function (location) {
        this.location = location;
    };
    Listing.prototype.setDescription = function (description) {
        this.description = description;
    };
    Listing.prototype.setNumberOfPeople = function (numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    };
    Listing.prototype.setPricePerNight = function (pricePerNight) {
        this.pricePerNight = pricePerNight;
    };
    return Listing;
}());
export { Listing };
//# sourceMappingURL=listing.js.map