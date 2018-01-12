'use strict';

var _DBHelper = require('./DBHelper');

var helper = new _DBHelper.DBHelper(DB_CONN_STR);
helper.connect().then(function (db) {
    console.log(db);
}, function (err) {
    console.log(err);
});