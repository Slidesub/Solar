const Resp = require('../helpers/resp.js')
const Permission = require('../models/permission.model')

class PermissionHandler {
    static async add (ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                author: user.id
                //action: 
            }
            let permission = await Tag.create(doc)
            if (permission) {
                return new Resp(200, 'success', {permission: permission}).toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async delete(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            let permission = await Permission.deleteOne({_id: ctx.params.id})
            if (permission) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async update(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                author: user.id,
                // action:
            }
            let permission = await Permission.update({_id: ctx.params.id}, doc)
            if (permission) {
                return new Resp(200, 'success').toJson()
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async get(ctx) {
        const permission = await Permission.findOne({_id: ctx.params.id})
        return new Resp(200, 'success', {permission: permission}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const pageSize = parseInt(data.pageSize);
        const pageIndex = parseInt(data.pageIndex);
        const permissions = Permission.list().skip(pagesize * (pageIndex - 1)).limit(pagesize)
        return new Resp(200, 'success', {permissions: permissions}).toJson()
    }
}