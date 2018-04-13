const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const mongoose = require('mongoose')
const jwt = require('koa-jwt')
const config = require('./src/config/config')
const routes_v1 = require('./src/routes.v1')
const errorHandler = require('./src/handlers/error.handler')

onerror(app)
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

mongoose.connect(config.mongoose.database)

app.use(errorHandler)

app.use(jwt({
  secret: config.jwt.secret
}).unless({
  path: [/\/regist/, /\/login/, /\/logout/],
}))

routes_v1(app)

module.exports = app
