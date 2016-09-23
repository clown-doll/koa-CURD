/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var create = require('../controls/admin/create');
var admin = require('../controls/admin/admin');
var edit = require('../controls/admin/edit');

module.exports = function (router) {
    router.get('/admin', admin.home);
    router.get('/admin/delete', admin.delete);
    router.get('/admin/create', create.show);
    router.get('/admin/edit', edit.show);
    router.post('/admin/handleCreate', create.handleCreate);
    router.post('/admin/handleEdit', edit.handleEdit);
};