export class Booking {
    private id: number;
    private listingId = 1;
    private guestId = 1;
    public status: string;
    public dateStart: string;
    public dateEnd: string;
    
    constructor(status: string, dateStart: string, dateEnd: string) {
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }

    getId() {
        return this.id;
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

    setId(id: number) {
        this.id = id;
    }

}