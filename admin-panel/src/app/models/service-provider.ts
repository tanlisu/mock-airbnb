import { stringify } from 'querystring';

export class ServiceProvider {
    firstName: string;
    lastName: string;
    email: string;
    cellPhone: string;
    numberOfListings: string;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.cellPhone = "";
        this.numberOfListings = "";
    }

    setInfo(firstName: string, lastName: string, email: string, cellPhone: string, numberOfListings: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.cellPhone = cellPhone;
        this.numberOfListings = numberOfListings;
    }
}
