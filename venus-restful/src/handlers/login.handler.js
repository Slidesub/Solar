const Resp = require('../helpers/resp.js');
const Util = require('../helpers/util.js');

class LoginHandler {
    static async login (ctx) {
        const data = ctx.request.body;
        const phone = data.phone;
        const email = data.email;
        const password = data.password;
        let user = None;
        if (!Util.isEmpty(phone)) {
            user = await User.findOne({phone: phone});
        } else if (!Util.isEmpty(email)) {
            user = await User.findOne({email: email});
        }
        if (!Util.isEmpty(user)) {
            let account = await Account.findOne({user_id: user._id});
            if (!Util.isEmpty(account) && Account.compare(password)) {
                ctx.state.user = user;
                return new Resp(data={user: user, }).toJson();
            }
        }
        return new Resp(msg='failed').toJson();
    }
    static async logout(ctx) {
    }
    static async regist(ctx) {
    }
    static async forget(ctx) {
    }
    static async token(ctx) {

    }
}

module.exports = LoginHandler;