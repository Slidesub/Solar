const PermissionActionSchema = new Schema({
    permission_id: {
        type: { type: Schema.Types.ObjectId, ref: 'permission' },
        unique: true,
        require: true
    },
    action_id: {
        type: { type: Schema.Types.ObjectId, ref: 'action' },
        unique: true,
        require: true
    }
});

module.exports = mongoose.model('PermissionAcount', UserSchema, 'acount');