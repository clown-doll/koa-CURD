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
    router.get('/delete', admin.delete);
    router.get('/create', create.show);
    router.get('/edit', edit.show);
    router.post('/handleCreate', create.handleCreate);
    router.post('/handleEdit', edit.handleEdit);
};

/**
 * 备注:
 * /admin/edit 类似这种多层级目录
 * layout静态文件会自动添加对应的目录
 * 如:http://localhost:8989/admin/css/admin_style.css
 *
 */
