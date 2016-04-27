/**
 * 主入口文件
 * Created by yinfx on 16-4-27.
 */

'use strict';

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/client', express.static(path.join(__dirname, './client')));
app.use('/lib', express.static(path.join(__dirname, './node_modules')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

// 异常处理

// 处理404错误
app.use(function (req, res, next) {
    return res.json({error: '对不起，您请求的地址不存在'});
});

// 生产环境下处理500错误
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: err.message,
            detail: err
        });
    });
}

// 生产环境下处理500错误，无堆栈异常
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: err.message
    });
});

app.listen(3000, function () {
    console.log('服务已正常运行，监听端口为3000');
});