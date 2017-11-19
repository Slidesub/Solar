# mongodb 3

* mongo --config mongo.conf
* mongo

```
use admin

db.createUser(
  {
    user: "root",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

use pluto
db.createUser(
  {
    user: "root",
    pwd: "password",
    roles: [
       { role: "readWrite", db: "pluto" }
    ]
  }
)

db.auth('pluto', 'pluto')

db.article.insert({title: '测试', description: 'test', icon: '', body: '', author:'admin', tags:['test'], clicks: '1', likes: '1', createDate: '2017-01-01 01:01:01', updateDate: '2017-02-02 02:02:02'})
```