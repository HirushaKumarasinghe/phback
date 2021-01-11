const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employees = require('../controllers/employee.controller');


//login

//show current emploeeys
//create project
//store data       
//start scoring

router.post('/view',employees.viewall);
router.post('/emarks',employees.getMarks);
router.post('/umarks',employees.updateMarks);
router.post('/cpro',employees.createProject);
router.post('/vpro',employees.viewProjects);
router.post('/uploadpro',employees.uploadProject);
router.post('/score',employees.scorecard);
router.post('/addskill',employees.addskill);
router.post('/dellskill',employees.dellskill);
router.post('/viewskill',employees.viewskill);
router.post('/showcards',employees.showScoreCards);
router.post('/onecard',employees.oneScoreCard);

router.post('/initial',employees.initial);
router.post('/algorithm',employees.algorithm);
router.post('/jobposting',employees.jobposting);
module.exports = router;