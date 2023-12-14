const mongoose = require('../lib/mongo');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  dateOfBirth: Date,
  email: String
});

const lineusers = mongoose.model('lineusers', userSchema);

const getUsersAreOnBirthday = async () => {
  try {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const usersAreOnTheirBirthday = await lineusers.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$dateOfBirth" }, month] },
          { $eq: [{ $dayOfMonth: "$dateOfBirth" }, day] }
        ]
      }
    }).select('firstName -_id');

    return usersAreOnTheirBirthday;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getUsersAreOnBirthday
};
