/**
 *
 * @Author: cat
 * @Date: 2016-09-23
 *
 **/

var models = require('../../models/models');
var moment = require('moment');

module.exports = {
    home: function *(next) {
        var courses = yield models.Course.find({});
        try {
            yield this.render('admin/index', {
                layout: 'admin/layout',
                title: "课程管理",
                moment: moment,
                courses: courses
            });
        } catch (e) {
            this.body = "发生错误";
            console.log(e);
        }
    },
    delete: function *(next) {
        console.log(this.query);
        var id = this.query.id;
        try {
            yield models.Course.remove({_id: id});
            this.redirect('/admin');
        } catch (e) {
            this.body = '删除失败';
            console.log(e);
        }
    }
};