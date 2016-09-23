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
            console.log(courses);
            yield this.render('app/index', {
                title: "团队培训",
                moment: moment,
                courses: courses
            });
        } catch (e) {
            console.log(e);
        }
    }
};