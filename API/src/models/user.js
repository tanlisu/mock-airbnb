var mysqlConn = require("../database/database");

//Task object constructor
User = function(user) {
  this.name = user.name;
  this.surname = user.surname;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
};

User.getAllUsers = (result) => {
    mysqlConn.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

User.getUserByID = (userId, result) => {
    mysqlConn.query("SELECT * FROM user where id = ?", userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

User.getUserByEmail = (email, result) => {
    mysqlConn.query("SELECT * FROM user where email = ?", email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

User.getUserByEmailAndPassword = (email, password, result) => {
    mysqlConn.query("SELECT * FROM user where (email = ? AND password = ?)", [email, password], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    })
};

User.addUser = (newUser, result) => {
    mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

User.updateUser = (id, user, result) => {
    mysqlConn.query("UPDATE user SET ? WHERE id = ?", [user, id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

User.deleteUser = (id, result) => {
    mysqlConn.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            result(res, null);
        }
    });
};

module.exports = User;