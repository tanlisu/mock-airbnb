export class User {
    private id;
    private role: string = 'guest';
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