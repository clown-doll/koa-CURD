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
            var courses = yield models.Course.find({}).sort({time: 1});
            var finished = [],
                unfinished = [];

            // 课程分类
            for (var i = 0; i < courses.length; i++) {
                var flag = moment(courses[i].time).isBefore(new Date()); // 判断课程是否在当前时间之前
                console.log(courses[i].time);
                if (flag) {
                    finished.push(courses[i]);
                } else {
                    unfinished.push(courses[i]);
                }
            }

            //console.log(courses);
            //console.log(finished);
            //console.log(unfinished);

            if (this.session.username) {
                var username = this.session.username;
            }

            yield this.render('app/index', {
                layout: 'app/layout',
                title: "团队培训",
                username: username,
                finished: finished,
                unfinished: unfinished,
                moment: moment
            });

        } catch (e) {
            this.body = '加载错误';
            console.log(e);
        }
    }
};