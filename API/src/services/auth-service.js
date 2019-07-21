const users = require("../models/user");
const UserServer = require('./user-service');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const userServer = new UserServer();

module.exports = class AuthService {
    constructor() {}

    login(userInput) {
        return new Promise((resolve, reject) => {
            users.getUserByEmailAndPassword(userInput.email, userInput.password, (res, err) => {
                if (err) {
                    reject(err);
                } else if (res.length == 0) {
                        reject("User does not exist");
                } else {
                    let token = jwt.sign({email: userInput.email},
                        config.secret,
                        { expiresIn: '24h' } // expires in 24 hours
                    );
                    // return the JWT token for the future API calls
                    resolve({ success: true,
                        user: res,
                        message: 'Authentication successful!',
                        token: token
                    });
                }
            });
        });
    }

    register(userInfo) {
        let email = userInfo.email;
        return new Promise((resolve, reject) => { 
            userServer.addUser(userInfo).then(userReturned => {
                let token = jwt.sign({email: email},
                    config.secret,
                    { expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                resolve({
                    success: true,
                    message: 'Registration successful!',
                    token: token
                });
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

}