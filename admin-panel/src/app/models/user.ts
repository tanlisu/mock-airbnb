export class User {
    firstName: string;
    lastName: string;
    email: string;
    cellPhone: string;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.cellPhone = "";
    }

    setInfo(firstName: string, lastName: string, email: string, cellPhone: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.cellPhone = cellPhone;
    }
}
