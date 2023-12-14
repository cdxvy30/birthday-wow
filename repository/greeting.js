const pool = require("../lib/pg-pool");

const getUsersAreOnBirthday = async() => {
  try {
    const query = `
        SELECT firstName
        FROM users
        WHERE date_part('month', users.dateofbirth) = date_part('month', CURRENT_DATE) AND date_part('day', users.dateofbirth) = date_part('day', CURRENT_DATE)`;
    const usersAreOnTheirBirthday = await pool.query(query);
    return usersAreOnTheirBirthday.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getUsersAreOnBirthday
}