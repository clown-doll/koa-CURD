/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var models = require('../../models/models');
var moment = require('moment');

module.exports = {
    home: function *(next) {
        console.log('index');
        try {
            var courses = yield models.Course.find({}).sort({time: -1});
            console.log(this.session);
            if (this.session.username) {
                var username = this.session.username;
            }
            yield this.render('app/index', {
                layout: 'app/layout',
                title: "团队培训",
                username: username,
                moment: moment,
                courses: courses
            });
        } catch (e) {
            this.body = '加载错误';
            console.log(e);
        }
    }
};