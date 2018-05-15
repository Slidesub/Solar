const Resp = require('../helpers/resp.js')
const Role = require('../models/role.model')
const RolePermissionAction = require('../models/role-permission-action.model')
const User = require('../models/user.model')

class RoleHandler {
    static async add (ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                author: user.id
            }
            let role = await Role.create(doc)
            if (role) {
                let array = [];
                for (let pa of data.permission_actions) {
                    for (let a of pa) {
                        let temp = {
                            role: role.id,
                            permission: pa.permission,
                            action: a
                        }
                        array.push(temp) 
                    }
                }
                let role_permission_action = RolePermissionAction.create(array)
                if (role_permission_action) {
                    return new Resp(200, 'success', {role: role, role_permission_action: role_permission_action}).toJson()
                }
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async delete(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const ids = ctx.params.ids.split(',')
            let role = await Role.remove({'_id': {$in: ids}})
            if (role) {
                let rolePermissionAction = RolePermissionAction.remove({'role': {$in: ids}})
                if (rolePermissionAction) {
                    return new Resp(200, 'success').toJson()
                }
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async update(ctx) {
        const user = await User.verify(ctx.headers.authorization)
        if (user) {
            const data = ctx.request.body
            const roleId = ctx.params.id
            const doc = {
                code: data.code,
                name: data.name,
                desc: data.desc,
                author: user.id
            }
            let role = await Role.update({_id: roleId}, doc)
            if (role) {
                let rolePermissionAction = RolePermissionAction.remove({'role': roleId})
                if (rolePermissionAction) {
                    let array = [];
                    for (let pa of data.permission_actions) {
                        for (let a of pa) {
                            let temp = {
                                role: roleId,
                                permission: pa.permission,
                                action: a
                            }
                            array.push(temp) 
                        }
                    }
                    let role_permission_action = RolePermissionAction.create(array)
                    if (role_permission_action) {
                        return new Resp(200, 'success').toJson()
                    }
                }
            }
        }
        return new Resp(200, 'failed').toJson()
    }

    static async get(ctx) {
        const role = await Role.findOne({_id: ctx.params.id})
        const rolePermissionActions = await RolePermissionAction.find({role: ctx.params.id})
        return new Resp(200, 'success', {role: role, rolePermissionActions: rolePermissionActions}).toJson()
    }

    static async list(ctx) {
        const data = ctx.query;
        const search = data.search
        let roles = []
        let count = await Tag.count()
        if (data.size && data.index && parseInt(data.size) > 0) {
            const size = parseInt(data.size)
            const index = parseInt(data.index)
            roles = await Role.find().skip(size * (index - 1)).limit(size)
                .populate({path: 'author', select: '_id nickname', model: User}).exec()
        } else {
            roles = await Role.find()
        }
        return new Resp(200, 'success', {roles: roles, count: count}).toJson()
    }
}

module.exports = RoleHandler