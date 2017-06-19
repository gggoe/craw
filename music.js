/**
 * 抓取QQ音乐数据
 */
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug = require('debug')('crawl:read');

module.exports = function (url, callback) {
    request({url, encoding: null}, function (err, response, body) {
        // body = iconv.decode(body, 'gbk');
        let $ = cheerio.load(body);
        let datas = [];
        $('.playlist__cover a').each(function () {
            let $this = $(this);
            // console.log($this);
            let data = {
                url1: "https:" + $this.attr('href')
            };
            datas.push(data);
        });
        $('.playlist__cover a img').each(function () {
            let $this = $(this);
            let data = {
                img: "https:" + $this.attr('src')
            };
            // datas.push(data);
        });
        callback(err, datas);
    })
};
let url = 'https://y.qq.com/';
module.exports(url, function (err, datas) {
    console.log(datas); // 查看爬取到的数据
});

// https://y.qq.com/n/yqq/album/002VQFaK10qcMv.html
// https://y.qq.com/n/yqq/album/002AYtB5468qEQ.html
// https://y.qq.com/n/yqq/album/004cPVkg2UXted.html
// https://y.qq.com/n/yqq/album/002xoA3I4WQQ5s.html
// https://y.qq.com/n/yqq/album/004Oma7t44ehGn.html
// https://y.qq.com/n/yqq/album/002hwSBZ0XEzdH.html
// https://y.qq.com/n/yqq/album/000BtcJa12QqKF.html
// https://y.qq.com/n/yqq/album/001qHmKU29WX7K.html
// https://y.qq.com/n/yqq/album/003kWEK711ueyF.html
// https://y.qq.com/n/yqq/album/0043frnu20YwzR.html
// https://y.qq.com/n/yqq/album/003peVPZ1OgjcJ.html
// https://y.qq.com/n/yqq/album/002VIYYx2PgZfc.html
// https://y.qq.com/n/yqq/album/004XWHNe3cc1Um.html
// https://y.qq.com/n/yqq/album/001O2oAa0R9erS.html
// https://y.qq.com/n/yqq/album/0039KN8A01Bg3i.html
// https://y.qq.com/n/yqq/album/0004hMKB1j2MWa.html

// https://y.gtimg.cn/music/photo_new/T002R300x300M000002VQFaK10qcMv.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000002AYtB5468qEQ.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000004cPVkg2UXted.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000002xoA3I4WQQ5s.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000004Oma7t44ehGn.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000002hwSBZ0XEzdH.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000000BtcJa12QqKF.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000001qHmKU29WX7K.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000003kWEK711ueyF.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M0000043frnu20YwzR.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000003peVPZ1OgjcJ.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000002VIYYx2PgZfc.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000004XWHNe3cc1Um.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M000001O2oAa0R9erS.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M0000039KN8A01Bg3i.jpg?max_age=2592000
// https://y.gtimg.cn/music/photo_new/T002R300x300M0000004hMKB1j2MWa.jpg?max_age=2592000

