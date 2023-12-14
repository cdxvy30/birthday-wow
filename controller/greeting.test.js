const { birthdayGreeting } = require('./greeting');
const repository = require('../repository/greeting');
const { genGreetingMessage } = require('../lib/msgGenerator');
const xml = require('xml');

// Mock the repository and message generator
jest.mock('../repository/greeting', () => ({
  getUsersAreOnBirthday: jest.fn()
}));
jest.mock('../lib/msgGenerator', () => ({
  genGreetingMessage: jest.fn()
}));
// Optionally mock the xml module if you want to assert the structure of the XML

describe('birthdayGreeting Controller', () => {
  it('should return birthday greetings in XML format for each user', async () => {
    // Arrange
    const mockUsers = [
      { firstName: 'John' },
      { firstName: 'Jane' }
    ];
    const mockReq = {};
    const mockRes = {
      setHeader: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    repository.getUsersAreOnBirthday.mockResolvedValue(mockUsers);
    genGreetingMessage.mockImplementation(firstName => ({ title: "Subject: Happy Birthday!", content: `Happy birthday, dear ${firstName}` }));

    // Act
    await birthdayGreeting(mockReq, mockRes);

    // Assert
    expect(repository.getUsersAreOnBirthday).toHaveBeenCalled();
    expect(genGreetingMessage).toHaveBeenCalledTimes(mockUsers.length);
    mockUsers.forEach(user => {
      expect(genGreetingMessage).toHaveBeenCalledWith(user.firstName);
    });
    expect(mockRes.setHeader).toHaveBeenCalledWith('Content-Type', 'application/xml');
    expect(mockRes.status).toHaveBeenCalledWith(200);
    // Check if the XML structure is correct
    // Note: This is a basic check. Depending on your requirements, you might need a more thorough XML structure validation.
    const expectedXml = xml({ root: mockUsers.map(user => ({ greeting: [{ title: "Subject: Happy Birthday!" }, { content: `Happy birthday, dear ${user.firstName}` }] })) });
    expect(mockRes.send).toHaveBeenCalledWith(expectedXml);
  });

  // Add more test cases as necessary, such as testing the error handling
});
