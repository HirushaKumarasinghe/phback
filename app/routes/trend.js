const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const trend = require('../controllers/trend.controller');

router.get('/test',trend.test);
router.post('/recruit',trend.employeeFilter);

module.exports = router;