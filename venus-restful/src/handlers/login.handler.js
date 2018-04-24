const Resp = require('../helpers/resp.js')
const Util = require('../helpers/util.js')
const User = require('../models/user.model')

class LoginHandler {
    static async login (ctx) {
        const data = ctx.request.body
        const phone = data.phone
        const email = data.email
        const password = data.password
        let user = null
        if (!Util.isEmpty(phone)) {
            user = await User.findOne({phone: phone})
        } else if (!Util.isEmpty(email)) {
            user = await User.findOne({email: email})
        }
        if (!Util.isEmpty(user) && user.compare(password)) {
            const token = await User.sign(user.id)
            if (token) {
                user.password = '';
                return new Resp(200, 'success', {user: user, token: token}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }
    static async regist(ctx) {
        const data = ctx.request.body
        const phone = data.phone
        const password = data.password
        const user = await User.create({phone: phone, password: password})
        if (user) {
            const token = await User.sign(user.id)
            if (token) {
                user.password = '';
                return new Resp(200, 'success', {user: user, token: token}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }
    static async forget(ctx) {
    }
    static async logout(ctx) {
    }
}

module.exports = LoginHandler;