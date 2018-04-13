const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    account_name: {
        type: String,
        unique: false,
        require: false
    },
    nickname: {
        type: String,
        unique: false,
        require: false
    },
    password: {
        type: String,
        unique: false,
        require: false
    },
    user_id: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    open_id: {
        type: String,
        unique: false,
        require: false
    },
    token: {
        type: String,
        unique: false,
        require: false
    }
});

module.exports = mongoose.model('Account', AccountSchema, 'account');