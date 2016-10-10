/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var app = require('koa')();
var router = require('koa-router')();
var render = require('koa-ejs');
var static = require('koa-static');
var mongoose = require('mongoose');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');

var path = require('path');
var config = require('./config/config.js');
var route = require('./routes/route');
var admin_route = require('./routes/admin_route');

// 模版引擎
render(app, {
    root: path.join(__dirname, 'views'),
    viewExt: 'html',
    layout: false,
    cache: false
});

// 初始化
require('./config/init.js')(app, mongoose);

// 静态资源
app.use(static(__dirname + '/assets'));

// 请求解析中间件
app.use(bodyParser());

//session
app.keys = [config.cookieSecret];
app.use(session(app));

// 路由
route(router);
admin_route(router);
app.use(router.routes());

/*app.use(function *(next) {
    this.status=404;
    this.body='404 Not Found!';
});

app.on('error',function (err,ctx) {
    if (process.env.NODE_ENV!='production') {
        this.body='500 server error';
        console.error(err.message);
        console.error(err);
    }
});

app.use(function *() {
    throw new Error('server error');
});*/

// 监听
app.listen(8000);
console.log('app is listening on 8000 port');