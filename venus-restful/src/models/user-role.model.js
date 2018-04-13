
const UserRoleSchema = new Schema({
    user_id: {
        type: { type: Schema.Types.ObjectId, ref: 'user' },
        unique: true,
        require: true
    },
    role_id: {
        type: { type: Schema.Types.ObjectId, ref: 'role' },
        unique: true,
        require: true
    }
});