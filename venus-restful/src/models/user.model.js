const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const hmac = require('../helpers/hmac')
const SALT_WORK_FACTORY = 10;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    nickname: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    desc: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    email: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    phone: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    password: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    active: {
        type: Boolean,
        unique: false,
        require: false,
        default: false
    },
    open_id: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    secret: {
        type: String,
        unique: false,
        require: false,
        default: ''
    },
    roles: {
        type: [ Schema.Types.ObjectId ],
        unique: false,
        require: false
    }
});

UserSchema.pre('save', function (next) {
    let user = this;
    // 当密码没有修改时不进行重复加密
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTORY, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
});

UserSchema.methods.compare = async function (password) {
    let that = this;
    return await bcrypt.compare(password, that.password);
};

UserSchema.statics.sign = async function (id) {
    const secret = hmac.geneSecret();
    let user = await this.findOneAndUpdate({_id: id}, {secret: secret});
    if (user) {
        let token = hmac.sign(id, secret);
        return token;
    }
};

UserSchema.statics.verify = async function (token) {
    const payload = hmac.verify(token.split(' ')[1])
    const user = await this.findOne({_id: payload.id})
    if (user && user.secret === payload.secret) {
        return user;
    }
};

module.exports = mongoose.model('User', UserSchema, 'user');