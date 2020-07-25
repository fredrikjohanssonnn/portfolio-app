/* Require dependencies and initiate the application */
const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

/* Define a view engine and where the views folder is located */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Use a route called /static when locating folder/files inside the public dir */
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));

/* This handles the 404 page */
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;

  console.error(
    `Oops, something went wrong! The server responded with a ${err.status} code. And left a message of ${err.stack}`
  );
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  if (!err.status) {
    err.status = 500;
  }
  res.status(err.status);
  res.render('error', {
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, console.log(`The app is live and listens to port ${port}`));
