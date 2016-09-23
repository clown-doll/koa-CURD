/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var home = require('../controls/app/index');
var detail = require('../controls/app/detail');

module.exports = function (router) {
    router.get('/', home.home);
    router.get('/detail', detail.home);
};