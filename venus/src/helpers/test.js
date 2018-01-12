import {DBHelper} from './DBHelper'

let helper = new DBHelper(DB_CONN_STR);
helper.connect().then((db) => {
    console.log(db);
}, (err) => {
    console.log(err);
});