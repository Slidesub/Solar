const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const SALT_WORK_FACTORY = 10; // 计算强度

const UserSchema = new Schema({
    name: {
        type: String,
        unique: false,
        require: false
    },
    nickname: {
        type: String,
        unique: false,
        require: false
    },
    desc: {
        type: String,
        unique: false,
        require: false
    },
    email: {
        type: String,
        unique: true,
        require: false
    },
    phone: {
        type: String,
        unique: true,
        require: false
    },
    password: {
        type: String,
        unique: false,
        require: false
    },
    open_id: {
        type: String,
        unique: false,
        require: false
    },
    secret: {
        type: String,
        unique: false,
        require: false
    }
});

UserSchema.pre('save', function (next) {
    let account = this;
    // 当密码没有修改时不进行重复加密
    if (!account.isModified('password')) {
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

module.exports = mongoose.model('User', UserSchema, 'user');