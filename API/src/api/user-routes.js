const express = require("express");
const router = express.Router();

const UserService = require('../services/user-service');
const userServer = new UserService();

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    userServer.getUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// get by id
router.get('/:id', (req,res) => {
    // asynchronous function call structure 
    userServer.getUserByID(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// add
router.post('/add', (req,res) => {
    // asynchronous function call structure 
    userServer.addUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// update
router.post('/update', (req,res) => {
    // asynchronous function call structure
    userServer.updateUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// delete
router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    userServer.deleteUser(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;