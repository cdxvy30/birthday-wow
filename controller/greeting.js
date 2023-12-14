const xml = require('xml');
const repository = require('../repository/greeting');
const { genGreetingMessage } = require("../lib/msgGenerator");

const birthdayGreeting = async(req, res) => {
  try {
    const birthdayUsers = await repository.getUsersAreOnBirthday();
    const greetings = birthdayUsers.map(user => {
      const greetingMessage = genGreetingMessage(user.firstName);
      return {
        greeting: [
          { title: greetingMessage.title },
          { content: greetingMessage.content }
        ]
      };
    });

    const xmlResponse = xml({ root: greetings });

    res.setHeader('Content-Type', 'application/xml');
    return res.status(200).send(xmlResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error.");
  }
};

module.exports = {
  birthdayGreeting
};
