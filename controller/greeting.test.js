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
      { lastname: 'Doe', firstname: 'John' },
      { lastname: 'Smith', firstname: 'Jane' }
    ];
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    repository.getUsersAreOnBirthday.mockResolvedValue(mockUsers);
    genGreetingMessage.mockImplementation((lastName, firstName) => ({ title: "Happy Birthday", content: `Hello ${lastName}, ${firstName}` }));

    // Act
    await birthdayGreeting(mockReq, mockRes);

    // Assert
    expect(repository.getUsersAreOnBirthday).toHaveBeenCalled();
    expect(genGreetingMessage).toHaveBeenCalledTimes(mockUsers.length);
    mockUsers.forEach(user => {
      expect(genGreetingMessage).toHaveBeenCalledWith(user.lastname, user.firstname);
    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({ data: mockUsers.map(user => genGreetingMessage(user.lastname, user.firstname)) });
  });
});
