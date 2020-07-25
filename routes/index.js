const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* Get the landing page when no path is entered */
router.get('/', (req, res) => {
  res.render('index', { projects: projects });
});

router.get('/about', (req, res) => {
  res.render('about');
});

/* Redirect the user to the portfolio site which contains the portfolio */
router.get('/projects', (req, res) => {
  res.redirect('/');
});

router.get('/project', (req, res) => {
  res.redirect('/');
});

/* Get the id of the user input in the parameter and use that to render the project with that id */
router.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const details = projects[id];
  res.render('project', details);
});

module.exports = router;
