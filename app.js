/* Require dependencies and initiate the application */
const express = require('express');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const path = require('path');
const app = express();

/* Define a view engine and where the views folder is located */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(3000);
