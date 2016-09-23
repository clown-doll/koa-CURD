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

var path = require('path');


// 模版引擎
render(app, {
    root: path.join(__dirname, 'views'),
    viewExt: 'html',
    cache: false
});

// 初始化
require('./config/init.js')(app, mongoose);

// 静态资源
app.use(static(__dirname + '/assets'));

// 请求解析中间件
app.use(bodyParser());

// 路由
var route = require('./routes/route');
var admin_route = require('./routes/admin_route');
route(router);
admin_route(router);
app.use(router.routes());


// 监听
app.listen(8989);
console.log('app is listening on 8989 port');