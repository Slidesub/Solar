const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const config = require('../configs/config')

const SALT_WORK_FACTORY = 10; // 计算强度

exports.geneSecret = function () {
    let hamc = crypto.createHmac('sha256', config.hmac.secret)
    hamc.update(Date.now().toString())
    return hamc.digest('hex')
}

exports.sign = function (id, secret) {
    return jwt.sign({id: id, secret: secret}, config.jwt.secret, {expiresIn: 3600})
}

exports.verify = function (token) {
    let payload = jwt.verify(token, config.jwt.secret)
    return payload
}