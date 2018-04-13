class Resp {
    constructor(code=200, msg='success', data=None) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = Resp;