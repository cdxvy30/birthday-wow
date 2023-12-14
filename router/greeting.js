const express = require('express');
const router = express.Router();
const controller = require('../controller/greeting');

router.get('/birthday',
  /*  #swagger.tags = ['Greetings']
      #swagger.description = 'Get birthday greetings for users whose birthdays are on the current day. Returns an array of birthday greetings, or an empty array if no users have a birthday. Elder(>49) will get an additional greting picture!'
      #swagger.responses[200] = {
          description: 'Success',
          schema: {
              type: 'object',
              properties: {
                  data: {
                      type: 'array',
                      items: {
                          type: 'object',
                          properties: {
                              title: {
                                  type: 'string',
                                  example: "Subject: Happy Birthday!"
                              },
                              content: {
                                  type: 'string',
                                  example: "Happy birthday, dear [Name]! We offer special discount for the following items: [Items]"
                              },
                              image: {
                                type: 'string',
                                example: "data:image/png;base64,[base64Image]"
                              }
                          }
                      }
                  }
              }
          }
      }
  */
  controller.birthdayGreeting);

module.exports = router;
