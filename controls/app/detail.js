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
        var id = this.query.id;
        var course = yield models.Course.findOne({_id: id});
        try {
            yield this.render('app/detail', {
                layout: 'app/layout',
                title: course.title,
                moment: moment,
                course: course
            });
        } catch (e) {
            this.body = "发生错误";
            console.log(e);
        }
    }
};