const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UploadSchema = new Schema({
    name: {
        type: String,
        unique: false,
        require: false
    },
    type: {
        type: String,
        unique: false,
        require: false
    },
    size: {
        type: String,
        unique: false,
        require: false
    },
    desc: {
        type: String,
        unique: false,
        require: false
    },
    url: {
        type: String,
        unique: false,
        require: false
    },
    path: {
        type: String,
        unique: false,
        require: false
    }
});

module.exports = mongoose.model('Upload', UploadSchema, 'upload');