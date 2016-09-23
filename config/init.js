/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

var config = require('./config');

module.exports = function (app, mongoose) {
    switch (app.env) {
        case 'development':
            mongoose.Promise = global.Promise;
            var db = mongoose.connect(config.mongo.development.connectionString, config.mongo.opts);
            db.connection.on("open", function () {
                console.log("数据库连接成功。")
            });
            break;
            db.connection.on("error", function (error) {
                console.log("数据库连接失败：" + error);
            });
        case 'production':
            mongoose.Promise = global.Promise;
            var db = mongoose.connect(config.mongo.production.connectionString, config.mongo.opts);
            db.connection.on("open", function () {
                console.log("数据库连接成功。")
            });
            break;
            db.connection.on("error", function (error) {
                console.log("数据库连接失败：" + error);
            });
            break;
        default:
            throw new Error(app.env + '是不被连接数据库的执行环境');
    }
};