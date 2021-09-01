const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('./config');

const indexRouter = require('./routes/index');

const app = express();
/* 跨域 */
app.use(cors());

const http = require('http');
const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

/* 服务 端口号 */
server.listen(config.listen);