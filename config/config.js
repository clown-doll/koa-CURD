/**
 *
 * @Author: cat
 * @Date: 2016-09-22
 *
 **/

module.exports = {
    PORT: process.env.PORT || 3000,
    // Cookie码
    cookieSecret: 'riLbqTemd3NAdUBwUU7nfsuteqwapN',
    mongo: {
        'development': {
            connectionString: 'mongodb://127.0.0.1/course'
        },
        'production': {
            connectionString: 'mongodb://127.0.0.1/course'
        },
        opts: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    }
};