/**
 *
 * @Author: cat
 * @Date: 2016-09-23
 *
 **/

var models=require('../../models/models.js');
var moment = require('moment');

module.exports = {
    show: function *(next) {
        var id = this.query.id;
        var course = yield models.Course.findOne({_id: id});
        //console.log(course);
        try {
            yield this.render('admin/edit', {
                layout: 'admin/layout',
                title: course.title,
                moment: moment,
                course: course,
                username: this.session.username
            });
        } catch (e) {
            this.body = "发生错误";
            console.log(e);
        }
    },
    handleEdit: function *(next) {
        var doc = {
            title: this.request.body.title,
            time: this.request.body.time,
            lecturer: this.request.body.lecturer,
            summary: this.request.body.summary,
            grade: this.request.body.grade,
            trainees: this.request.body.trainees
        };
        var id = this.request.body.id;

        try {
            yield models.Course.where({_id: id}).setOptions({multi: true}).update(doc).exec();
            this.status = 303;
            this.redirect('/admin');
        } catch(e) {
            this.body = '修改失败: ' + e.message;
            console.log(e);
        }
    }
};