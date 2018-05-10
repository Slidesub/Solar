const Resp = require('../helpers/resp.js')
const fs = require('fs');
const os = require('os');
const path = require('path');
const Upload = require('../models/upload.model')
const User = require('../models/user.model')

class UploadHandler {
    static async upload(ctx) {
        const upload = ctx.request.body.files.file;
        const arr = upload.name.split('.');
        const ext = arr[arr.length - 1];
        const destName = parseInt(Math.random() * 100) + Date.parse(new Date()).toString() + '.' + ext;
        const dest = path.join('public/upload/image', destName);
        const reader = fs.createReadStream(upload.path);
        const stream = fs.createWriteStream(dest);
        reader.pipe(stream);

        const up = {
            name: destName,
            type: upload.type,
            size: upload.size,
            desc: 'upload',
            url: 'http://' + ctx.host + '/upload/image/' + destName,
            path: dest,
        }
        const upObj = await Upload.create(up);
        const result = {
            id: upObj.id,
            name: upload.name,
            url: upObj.url
        }
        return new Resp(200, 'success', result).toJson()
    }
}

module.exports = UploadHandler;