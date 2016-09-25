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
    // 权限控制
    router.get(/^\/admin/,function *(next) {
        console.log(this.url);
        if (this.url === "/admin" || this.url === "/admin/") {
            this.redirect('/admin/index');
        }
        if (this.session.username) {
            yield next;
        }else{
            this.status = 303;
            this.redirect('/login');
        }
    });

    router.get('/admin/index', admin.home);
    router.get('/admin/delete', admin.delete);
    router.get('/admin/create', create.show);
    router.get('/admin/edit', edit.show);
    router.post('/admin/handleCreate', create.handleCreate);
    router.post('/admin/handleEdit', edit.handleEdit);
};

/**
 * 备注:
 * /admin/edit 类似这种多层级目录
 * layout静态文件会自动添加对应的目录
 * 如:http://localhost:8989/admin/css/admin_style.css
 *
 */
