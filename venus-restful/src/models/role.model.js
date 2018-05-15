const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    code: {
        type: String,
        unique: false,
        require: false
    },
    name: {
        type: String,
        unique: false,
        require: false
    },
    desc: {
        type: String,
        unique: false,
        require: false
    },
    author: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    }
});

module.exports = mongoose.model('Role', RoleSchema, 'role');
