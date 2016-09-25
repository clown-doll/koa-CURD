/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var home = require('../controls/app/index');
var detail = require('../controls/app/detail');
var register = require('../controls/app/register.js');
var loginout = require('../controls/app/loginout.js');
var login = require('../controls/app/login.js');

module.exports = function (router) {
    router.get('/', home.home);
    router.get('/detail', detail.home);

    // 注册
    router.get('/register', register.home);
    router.post('/handleRegister', register.handleRegister);

    //登录
    router.get('/login', login.home);
    router.post('/handleLogin', login.handleLogin);

    // 注销登录
    router.get('/loginOut',loginout);
};