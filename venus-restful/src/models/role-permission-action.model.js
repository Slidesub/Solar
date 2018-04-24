const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolePermissionActionSchema = new Schema({
    role_id: {
        type: Schema.Types.ObjectId,
        unique: false,
        require: false
    },
    permission_action_id: {
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