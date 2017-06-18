# 爬虫
爬取百度电影排行榜

## 下载依赖
```
npm install request cheerio debug async mongoose cron iconv-lite -S
```

## 创建tasks 目录
创建一个read.js 文件，用来爬取的网页数据
>1. 向网址发出请求得到响应体
2. 把得到的Buffer 转成字符串
3. 从字符串提取我们需要的内容
4. 把提取到的结果传入回调函数

创建一个read.js 文件，用来读取网页数据

## 创建model.js 文件

连接数据库

写入数据库
