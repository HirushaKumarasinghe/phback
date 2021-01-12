const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const appraisals = require('../controllers/appraisal.controller');
const survey = require('../controllers/survey.controller');

router.get('/camp',appraisals.survey_camp);
router.post('/appr',appraisals.startQ);
router.post('/ans',appraisals.answers);
router.post('/results',appraisals.results);

router.post('/addkey',survey.addKeyDriver);
router.post('/addq',survey.addQuestion);
router.post('/vkey',survey.viewKeyDriver);
router.post('/vq',survey.viewQuestion);
router.get('/summary',survey.summaryQuestionair);

module.exports = router;