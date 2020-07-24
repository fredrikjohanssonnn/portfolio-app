/* Require dependencies and initiate the application */
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const port = 3000;
const app = express();

/* Define a view engine and where the views folder is located */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Use a route called /static when locating folder/files inside the public dir */
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

app.listen(port, console.log(`The app is live and listens to port ${port}`));
