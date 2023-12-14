const repository = require('../repository/greeting');
const { genGreetingMessageBasedOnGender } = require("../lib/msgGenerator");

const birthdayGreeting = async(req, res) => {
  try {
    const birthdayUsers = await repository.getUsersAreOnBirthday();
    const data = []
    for (const user of birthdayUsers) {
      data.push(genGreetingMessageBasedOnGender(user.firstname, user.gender));
    }
    return res.status(200).send({data});
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error.");
  }
};

module.exports = {
  birthdayGreeting
};
