const express = require('express');
const router = express.Router();
const controller = require('../controller/greeting');

router.get('/birthday',
  /*  #swagger.tags = ['Greetings']
      #swagger.description = 'Get birthday greetings for users whose birthdays are on the current day. The response is in XML format and contains greetings within a root element.'
      #swagger.responses[200] = {
          description: 'An XML list of birthday greetings for users, or an empty root element if no users have a birthday.',
          content: {
            'application/xml': {
              schema: {
                type: 'string',
                example: '<root><greeting><title>Subject: Happy Birthday!</title><content>Happy birthday, dear John!</content></greeting><greeting><title>Subject: Happy Birthday!</title><content>Happy birthday, dear Jane!</content></greeting></root>'
              }
            }
          }
      }
  */
  controller.birthdayGreeting);

module.exports = router;
