class Resp {
    constructor(status=200, msg='success', data=null) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }
    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = Resp;