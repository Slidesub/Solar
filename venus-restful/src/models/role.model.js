const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    code: {
        type: String,
        unique: true,
        require: true
    },
    name: {
        type: String,
        unique: false,
        require: true
    },
    desc: {
        type: String,
        unique: false,
        require: false
    }
});