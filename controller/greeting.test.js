const { birthdayGreeting } = require('../controller/greeting');
const repository = require('../repository/greeting');
const { genGreetingMessage } = require('../lib/msgGenerator');

// Mock the repository and message generator
jest.mock('../repository/greeting', () => ({
  getUsersAreOnBirthday: jest.fn()
}));
jest.mock('../lib/msgGenerator', () => ({
  genGreetingMessage: jest.fn()
}));

describe('birthdayGreeting Controller', () => {
  it('should return birthday greetings for each user', async () => {
    // Arrange
    const mockUsers = [
      { firstname: 'John', dateofbirth: '1970-01-01' },
      { firstname: 'Jane', dateofbirth: '2000-01-01' }
    ];
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    repository.getUsersAreOnBirthday.mockResolvedValue(mockUsers);
    genGreetingMessage.mockImplementation((name, dob) => {
      const age = new Date().getFullYear() - new Date(dob).getFullYear();
      const message = {
        title: "Subject: Happy Birthday!",
        content: `Happy birthday, dear ${name}!`
      };

      if (age > 49) {
        // Simplified mock image URL for testing
        message.image = `data:image/png;base64,mockImageFor${name}`;
      }

      return message;
    });

    await birthdayGreeting(mockReq, mockRes);

    expect(repository.getUsersAreOnBirthday).toHaveBeenCalled();
    expect(genGreetingMessage).toHaveBeenCalledTimes(mockUsers.length);
    mockUsers.forEach(user => {
      expect(genGreetingMessage).toHaveBeenCalledWith(user.firstname, user.dateofbirth);
    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({ data: mockUsers.map(user => genGreetingMessage(user.firstname, user.dateofbirth)) });
  });
});
