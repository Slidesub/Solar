const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionSchema = new Schema({
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

module.exports = mongoose.model('Permission', PermissionSchema, 'permission');