const pool = require("../lib/pg-pool");
const { getUsersAreOnBirthday } = require("./greeting");

// Mock the pool dependency
jest.mock("../lib/pg-pool", () => ({
  query: jest.fn()
}));

describe('getUsersAreOnBirthday', () => {
  it('should return users who have their birthday at today', async () => {
    const mockUsers = [];

    pool.query.mockResolvedValue({ rows: mockUsers });

    const result = await getUsersAreOnBirthday();

    expect(result).toEqual(mockUsers);
    expect(pool.query).toHaveBeenCalledWith(`
        SELECT firstName, gender
        FROM users
        WHERE date_part('month', users.dateofbirth) = date_part('month', CURRENT_DATE) AND date_part('day', users.dateofbirth) = date_part('day', CURRENT_DATE)`);
  });
});
