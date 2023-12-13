const pool = require("../lib/pg-pool");

const getUsersAreOnBirthDay = async() => {
  try {
    const query = `
        SELECT firstName
        FROM users
        WHERE date_part('month', users.dateofbirth) = 8 AND date_part('day', users.dateofbirth) = 8`;
    const usersAreOnTheirBirthday = await pool.query(query);
    console.log(usersAreOnTheirBirthday.rows);
    return usersAreOnTheirBirthday.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getUsersAreOnBirthDay
}