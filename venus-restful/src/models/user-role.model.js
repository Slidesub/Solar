const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserRoleSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    role_id: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    author: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    }
});

module.exports = mongoose.model('UserRole', UserRoleSchema, 'user_role');
