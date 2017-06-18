let Movie = require('../model');
let async = require('async');
let debug = require('debug')('crawl:write');

module.exports = function (movies, callback) {
    async.forEach(movies, function (movie, cb) {
        Movie.create(movie, cb);
        debug(`写入电影${movie.name}`);
    }, callback);
};
// module.exports([
//     {
//         name: '长城',
//         url: 'http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%B3%A4%B3%C7'
//     }
// ], function () {
// });