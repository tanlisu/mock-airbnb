var User = /** @class */ (function () {
    function User(name, surname, email, password) {
        this.role = 'guest';
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getSurname = function () {
        return this.surname;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    return User;
}());
export { User };
//# sourceMappingURL=user.js.map