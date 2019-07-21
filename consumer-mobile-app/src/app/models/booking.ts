export class Booking {
    private id;
    private listingId;
    private guestId;
    public status: string;
    public dateStart: string;
    public dateEnd: string;
    
    constructor(status: string, dateStart: string, dateEnd: string) {
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }

    getListingId() {
        return this.listingId;
    }

    getGuestId() {
        return this.guestId;
    }

    getStatus() {
        return this.status;
    }

    getDateStart() {
        return this.dateStart;
    }

    getDateEnd() {
        return this.dateEnd;
    }

}