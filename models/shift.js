//
// This file contains functions called from routes/shifts.js
//

var db = require('../connect');
var shift = {
    getAllShifts: function(callback) {
        return db.query("select * from shift", callback);
    },
    getShiftById: function(id, callback) {
        return db.query("select * from shift where _id=?", [id], callback);
    },
    addShift: function(shift, callback) {
        return db.query("insert into shift (reason, complacency, time, date, locationId, descriptionId, userId)", [shift.reason, shift.complacency, shift.time, shift.date, shift.locationId, shift.descriptionId, shift.userId], callback);
    },
    deleteShift: function(id, callback) {
        return db.query("delete from shift where _id=?", [id], callback);
    },
    getShiftsUnnasignedByCompanyId: function(companyId, callback) {
        return db.query("select * from shift where companyId=? and icClaimed=0", [companyId], callback);
    },
    updateShift: function(id, shift, callback) {
        return db.query("update shift set first=?,last=? where company_id=?", [shift.first, shift.last, id], callback);
    }
};
module.exports = shift;
