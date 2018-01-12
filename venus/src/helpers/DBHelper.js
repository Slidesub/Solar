var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

class DBHelper {
    constructor (uri) {
        this.uri = uri;
        this.db = {};
        return this;
    }
    connect () {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.uri, (err, db) => {
                if (err) {
                    reject(err);
                }
                this.db = db;
                resolve(this);
            })
        });
    }
    close () {
        this.db.close();
    }
}


