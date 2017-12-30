//
// This file contains functions called from routes/descriptions.js
//

var db = require('../connect');
var description = {
    getAllDescriptions: function(callback) {
        return db.query("select * from description", callback);
    },
    getDescriptionById: function(id, callback) {
        return db.query("select * from description where _id=?", [id], callback);
    },
    addDescription: function(description, callback) {
        return db.query("insert into description (name, height, weight, eyeColor, skinColor, hairColor, hairStyle, arrestId)", [description.name, description.height, description.weight, description.eyeColor, description.skinColor, description.hairColor, description.hairStyle, description.arrestId], callback);
    },
    deleteDescription: function(id, callback) {
        return db.query("delete from description where _id=?", [id], callback);
    },
    updateDescription: function(id, description, callback) {
        return db.query("update description set first=?,last=? where company_id=?", [description.first, description.last, id], callback);
    }
};
module.exports = description;
