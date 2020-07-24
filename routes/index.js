const express = require('express');
const router = express.Router();

/* Get the landing page when no path is entered */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
