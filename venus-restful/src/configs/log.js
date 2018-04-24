const log4js = require('log4js');

log4js.configure({
    replaceConsole: true,
    appenders: {
        stdout: {
            type: 'stdout',
        },
        dataFileLog: {
            type: "dateFile",
            filename: 'logs/',
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true,
        }
    },  
    categories: {
        default: {appenders: ['stdout', 'dataFileLog'], level: 'debug'},
        info: {appenders: ['stdout', 'dataFileLog'], level: 'info'},
        warn: {appenders: ['stdout', 'dataFileLog'], level: 'warn'},
        error: {appenders: ['stdout', 'dataFileLog'], level: 'error'},
    }
});

exports.getLogger = function(name) {
    return log4js.getLogger(name || 'default')
}

exports.use = function(app, logger) {
    app.use(log4js.connectLogger(logger || log4js.getLogger('default'), {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]' //自定义输出格式
    }))
}