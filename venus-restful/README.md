* npm instll
* npm run build
* npm run dev

* npm install -g koa2-generator
* koa2 venus

* es7支持
* npm i --save-dev babel-cli babel-preset-env babel-plugin-transform-runtime

* mongodb
* mongod --dbpath C:/Software/MongoDB/data/db
* mongo
* use test
* db.createUser({user:'gerald.wang',pwd:'gerald.wang',roles:[{role:'userAdmin',db:'test'}]})

* mongod --auth --dbpath C:/Software/MongoDB/data/db
* mongo -u gerald.wang -p gerald.wang 127.0.0.1:27017/test

* npm i --save-dev jsonwebtoken
* npm i --save-dev bcryptjs
* npm i --save-dev koa-jwt

* npm i --save-dev nunjucks
* npm i --save-dev markdown
* npm i --save-dev supervisor
* npm i --save-dev log4js

* npm markdown -v

# 数据库设计

* user:
* role: admin/guest/...
* permisson: 
    * user management/tag management/article management/role management/permission management/action management
* action： CRUD

* user_role
* permisson_action
* role_permisson_action

# Nginx设置
server {
    listen 80;
    listen [::]:80;
    server_name unicome.org;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:4200;
    }
}

server {
    listen 80;
    listen [::]:80;
    server_name api.unicome.org;
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:3000;
    }
}
