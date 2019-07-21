const users = require("../models/user");

module.exports = class UserService {
    
    constructor() {}

    getUsers() {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {    
            users.getAllUsers((res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    getUserByID(id) {
        return new Promise((resolve, reject) => {
            users.getUserByID(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    addUser(userInfo) {
        return new Promise((resolve, reject) => {
            // check if there already exists a user with this email
            users.getUserByEmail(userInfo.email, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // add user
                    users.addUser(userInfo, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });
                }
                else { // user already exists
                    reject("User already exists");
                }
            })
        });
    }

    updateUser(userInfo) {
        return new Promise((resolve, reject) => {
            // check if there exists a user with this email
            users.getUserByEmail(userInfo.email, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // no user found
                    reject("User does not exist");
                }
                else { // update user
                    users.updateUser(userInfo.id, userInfo, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });
                }
            })
        });
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            // check if there exists a user with this id
            users.getUserByID(id, (res, err) => {
                if (err) {
                    reject(err);
                }
                if (res.length == 0) { // no user found
                    reject("User does not exist");
                }
                else { // delete user
                    users.deleteUser(id, (res, err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(res);
                        }
                    });
                }
            })
        });
    }
}