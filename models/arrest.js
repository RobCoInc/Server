//
// This file contains functions called from routes/arrests.js
//

var db = require('../connect');
var arrest = {
    getAllArrests: function(callback) {
        return db.query("select * from arrest", callback);
    },
    getArrestById: function(id, callback) {
        return db.query("select * from arrest where _id=?", [id], callback);
    },
    addArrest: function(arrest, callback) {
        return db.query("insert into arrest (reason, complacency, time, date, locationId, descriptionId, userId)", [arrest.reason, arrest.complacency, arrest.time, arrest.date, arrest.locationId, arrest.descriptionId, arrest.userId], callback);
    },
    deleteArrest: function(id, callback) {
        return db.query("delete from arrest where _id=?", [id], callback);
    },
    updateArrest: function(id, arrest, callback) {
        return db.query("update arrest set first=?,last=? where company_id=?", [arrest.first, arrest.last, id], callback);
    }
};
module.exports = arrest;
