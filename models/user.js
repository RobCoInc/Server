var db = require('../connect');
var user = {
    getAllUsers: function(callback) {
      console.log("showing all users");
        return db.query("select * from user", callback);
    },
    getUserByEmail: function(email, callback) {
        return db.query("select password from user where email=?", [email], callback);
    },
    addUser: function(user, callback) {
      console.log("request to add user received. processing...");
        return db.query("insert into user (password, email, firstName, lastName, companyId, cellNumber, isAdmin, isBasic) values(?,?,?,?,?,?,?,?)", [user.password, user.email, user.firstName, user.lastName, user.companyId, user.cellNumber, user.isAdmin, user.isBasic], callback);
    },
    deleteUser: function(id, callback) {
        return db.query("delete from user where user_id=?", [id], callback);
    },
    checkPassword: function(body, callback) {
      console.log("Checking user: " + body.email);
      console.log("With password: " + body.password);
        //return db.query("delete from users where user_id=?", [id], callback);
    },
    updateUser: function(id, user, callback) {
        return db.query("update user set first=?,last=? where user_id=?", [user.first, user.last, id], callback);
    }
};
module.exports = user;
