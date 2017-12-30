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
        return db.query("insert into description (reason, complacency, time, date, locationId, descriptionId, userId)", [description.reason, description.complacency, description.time, description.date, description.locationId, description.descriptionId, description.userId], callback);
    },
    deleteDescription: function(id, callback) {
        return db.query("delete from description where _id=?", [id], callback);
    },
    updateDescription: function(id, description, callback) {
        return db.query("update description set first=?,last=? where company_id=?", [description.first, description.last, id], callback);
    }
};
module.exports = description;
