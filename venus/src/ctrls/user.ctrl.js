const User = require('../models/user.model')

class UserCtrl {
    static async list(ctx) {
        let pageIndex = ctx.params.page;
        let pageSize = ctx.params.size;
        let users = await User.find({})
            .limit(pageSize)
            .skip((pageIndex - 1) * pageSize)
            .exec();
        return { total: 0, users: users };
    }

    static async save(ctx) {
        let data = ctx.request.body;
        let doc = {
            name: data.name,
            password: data.password,
            mobile: data.mobile,
            email: data.email,
            created_at: Date.now(),
            updated_at: Date.now()
        };
        let user = await User.create(doc);
        return {code: 200, msg: 'success', data: user};
    }
}

module.exports = UserCtrl