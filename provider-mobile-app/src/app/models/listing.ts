export class Listing {
    private id: number;
    private hostId: number;
    public title: string;
    public location: string;
    public description: string;
    public numberOfPeople: string;
    public pricePerNight: string;
    
    constructor(title: string, location: string, description: string, numberOfPeople: string, pricePerNight: string) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.numberOfPeople = numberOfPeople;
        this.pricePerNight = pricePerNight;
    }

    getId() {
        return this.id;
    }

    getHostId() {
        return this.hostId;
    }

    getTitle() {
        return this.title;
    }

    getLocation() {
        return this.location;
    }
    
    getDescription() {
        return this.description;
    }

    getNumberOfPeople() {
        return this.numberOfPeople;
    }

    getPricePerNight() {
        return this.pricePerNight;
    }

    setId(id: number) {
        this.id = id;
    }

    setHostId(hostId: number) {
        this.hostId = hostId;
    }

    setTitle(title: string) {
        this.title = title;
    }

    setLocation(location: string) {
        this.location = location;
    }
    
    setDescription(description: string) {
        this.description = description;
    }

    setNumberOfPeople(numberOfPeople: string) {
        this.numberOfPeople = numberOfPeople;
    }

    setPricePerNight(pricePerNight: string) {
        this.pricePerNight = pricePerNight;
    }

}