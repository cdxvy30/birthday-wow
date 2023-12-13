const express = require('express');
const router = express.Router();
const controller = require('../controller/greeting');

router.get('/birthday', controller.birthdayGreeting);

module.exports = router;