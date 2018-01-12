'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

var DBHelper = function () {
    function DBHelper(uri) {
        _classCallCheck(this, DBHelper);

        this.uri = uri;
        this.db = {};
        return this;
    }

    _createClass(DBHelper, [{
        key: 'connect',
        value: function connect() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                MongoClient.connect(_this.uri, function (err, db) {
                    if (err) {
                        reject(err);
                    }
                    _this.db = db;
                    resolve(_this);
                });
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.db.close();
        }
    }]);

    return DBHelper;
}();