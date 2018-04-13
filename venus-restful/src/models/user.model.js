const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        unique: false,
        require: false
    },
    email: {
        type: String,
        unique: true,
        require: false
    },
    phone: {
        type: String,
        unique: true,
        require: false
    },
    address: {
        type: String,
        unique: false,
        require: false
    }
});