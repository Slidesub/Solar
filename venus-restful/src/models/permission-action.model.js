const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionActionSchema = new Schema({
    permission_id: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    action_id: {
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

module.exports = mongoose.model('PermissionAction', PermissionActionSchema, 'permission_action');