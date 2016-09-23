/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var mongoose = require('mongoose');

// 课程模式
var courseSchema = mongoose.Schema({
    title: String, // 课程标题
    time: Date, // 授课时间
    lecturer: String, // 授课导师
    summary: String, // 课程详情
    grade: String, // 课程等级
    trainees: String // 培训对象
});

// 绑定模式
var Course = mongoose.model('Course', courseSchema);

exports.Course = Course;

