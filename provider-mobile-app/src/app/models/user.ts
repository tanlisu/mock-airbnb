export class User {
    private id: number;
    private role: string = 'host';
    public name: string;
    public surname: string;
    public email: string;
    public password: string;

    constructor(name: string, surname: string, email: string, password: string,) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    setId(id: number) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setSurname(surname: string) {
        this.surname = surname;
    }
    
    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }
}