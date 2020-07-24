const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* Get the landing page when no path is entered */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'Express' });
});

router.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const details = projects[id];
  const { project_name, description, technologies } = details;
  res.render('project', details);
});

module.exports = router;
