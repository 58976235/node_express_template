/*
 * @Author: your name
 * @Date: 2021-06-07 12:14:28
 * @LastEditTime: 2021-09-01 14:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node_express_template/app.js
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('./config');

const indexRouter = require('./routes/index');

const app = express();
/* 跨域 */
app.use(cors({
    origin:config.origin,
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
}));

const http = require('http');
const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

/* 服务 端口号 */
server.listen(config.listen);