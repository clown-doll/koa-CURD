/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// 课程模式
var courseSchema = mongoose.Schema({
    title: {
        type: String, // 课程标题
        unique: true,
        required: [true, "请输入课程名称！"]
    },
    time: {
        type: Date, // 授课时间
        required: [true, "请选择课程时间！"]
    },
    lecturer: {
        type: String, // 授课导师
        required: [true, "请输入授课导师名称！"]
    },
    summary: String, // 课程详情
    grade: String, // 课程等级
    trainees: String, // 培训对象
    author: String
});

// 用户模式
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "请输入用户名！"]
    },
    password: {
        type: String,
        required: [true, "请输入密码！"]
    },
    salt:String  //md5 salt
});

courseSchema.plugin(uniqueValidator, {message: '{VALUE} 已经存在，请重新输入！' });

// 绑定模式
var Course = mongoose.model('Course', courseSchema);
var User = mongoose.model('User', userSchema);

exports.Course = Course;
exports.User = User;

