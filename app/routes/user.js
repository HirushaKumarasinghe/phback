const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controller');

router.post('/login',users.login);

module.exports = router;