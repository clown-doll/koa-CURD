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
        try {
            var courses = yield models.Course.find({});
            var finished = [],
                unfinished = [];

            for (var i = 0; i < courses.length; i++) {
                var flag = moment(courses[i].time).isBefore(new Date()); // 判断课程是否在当前时间之前
                console.log(courses[i].time);
                if (flag) {
                    finished.push(courses[i]);
                } else {
                    unfinished.push(courses[i]);
                }
            }

            yield this.render('admin/index', {
                layout: 'admin/layout',
                title: "课程管理",
                finished: finished,
                unfinished: unfinished,
                username: this.session.username,
                moment: moment
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
            this.redirect('/admin/index');
        } catch (e) {
            this.body = '删除失败';
            console.log(e);
        }
    }
};