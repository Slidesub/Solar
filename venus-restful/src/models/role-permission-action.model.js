const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolePermissionActionSchema = new Schema({
    role: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    permission: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    action: {
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

module.exports = mongoose.model('RolePermissionAction', RolePermissionActionSchema, 'role_permission_action');