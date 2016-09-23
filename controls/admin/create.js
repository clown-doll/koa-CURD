/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var models = require('../../models/models');

module.exports = {
    show: function *(next) {
        //console.log('index');
        yield this.render('admin/create', {
            layout: 'admin/layout',
            title: "添加课程"
        });
    },
    handleCreate: function *(next) {
        //console.log(this.request.body);
        var doc = {
            title: this.request.body.title,
            time: this.request.body.time,
            lecturer: this.request.body.lecturer,
            summary: this.request.body.summary,
            grade: this.request.body.grade,
            trainees: this.request.body.trainees
        };

        try {
            yield models.Course.create(doc);
            this.status=303;
            this.redirect('/admin');
        } catch(e) {
            this.body='保存失败: '+e.message;
            console.log(e);
        }
    }
};