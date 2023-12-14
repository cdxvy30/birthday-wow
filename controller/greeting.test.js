const repository = require('../repository/greeting');
const { genGreetingMessage } = require("../lib/msgGenerator");
const { birthdayGreeting } = require('../controller/greeting');

jest.mock('../repository/greeting', () => ({
  getUsersAreOnBirthday: jest.fn()
}));
jest.mock('../lib/msgGenerator', () => ({
  genGreetingMessage: jest.fn()
}));

describe('birthdayGreeting Controller', () => {
  it('should return a list of birthday messages', async () => {
    const mockUsers = [{ firstname: "John" }, { firstname: "Jane" }];
    const mockReq = { query: {} };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    repository.getUsersAreOnBirthday.mockResolvedValue(mockUsers);
    genGreetingMessage.mockImplementation(name => `Happy Birthday, ${name}!`);

    await birthdayGreeting(mockReq, mockRes);

    expect(repository.getUsersAreOnBirthday).toHaveBeenCalled();
    expect(genGreetingMessage).toHaveBeenCalledTimes(mockUsers.length);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({
      data: mockUsers.map(user => `Happy Birthday, ${user.firstname}!`)
    });
  });
});
