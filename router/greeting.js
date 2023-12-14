const express = require('express');
const router = express.Router();
const controller = require('../controller/greeting');

router.get('/birthday',
  /* 	#swagger.tags = ['Greetings']
      #swagger.description = 'A list of birthday greetings for users on birthday on the current day, or an empty array if no birthdays are found'
      #swagger.responses[200] = {
          description: 'Success',
          schema: {
              data: [
                  {
                      "title": "Subject: Happy Birthday!",
                      "content": "Happy birthday, dear Robert!"
                  }
              ]
          }
      }
  */
  controller.birthdayGreeting);

module.exports = router;