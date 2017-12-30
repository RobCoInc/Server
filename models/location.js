//
// This file contains functions called from routes/locations.js
//

var db = require('../connect');
var location = {
    getAllLocations: function(callback) {
        return db.query("select * from location", callback);
    },
    getLocationById: function(id, callback) {
        return db.query("select * from location where _id=?", [id], callback);
    },
    addLocation: function(location, callback) {
        return db.query("insert into location (reason, complacency, time, date, locationId, descriptionId, userId)", [location.reason, location.complacency, location.time, location.date, location.locationId, location.descriptionId, location.userId], callback);
    },
    deleteLocation: function(id, callback) {
        return db.query("delete from location where _id=?", [id], callback);
    },
    updateLocation: function(id, location, callback) {
        return db.query("update location set first=?,last=? where company_id=?", [location.first, location.last, id], callback);
    },
    getLocationsByCompanyId: function(companyId, callback) {
        return db.query("select * from location where companyId=?", [companyId], callback);
    }
};
module.exports = location;
