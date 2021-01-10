const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employees = require('../controllers/employee.controller');


//login

//show current emploeeys
//create project
//store data       
//start scoring

router.post('/score',employees.scorecard);

module.exports = router;