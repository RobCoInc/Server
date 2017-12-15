var db = require('../connect');
var user = {
    getAllUsers: function(callback) {
      console.log("showing all users");
        return db.query("Select * from users", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from users where user_id=?", [id], callback);
    },
    addUser: function(user, callback) {
      console.log("request to add user received. processing...");
        return db.query("Insert into users values(?,?,?)", [user.id, user.first, user.last], callback);
    },
    deleteUser: function(id, callback) {
        return db.query("delete from users where Id=?", [id], callback);
    },
    updateUser: function(id, user, callback) {
        return db.query("update users set Title=?,Status=? where Id=?", [user.Title, user.Status, id], callback);
    }
};
module.exports = user;
