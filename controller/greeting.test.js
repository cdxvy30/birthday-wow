const { birthdayGreeting } = require('../controller/greeting');
const repository = require('../repository/greeting');
const { genGreetingMessageBasedOnGender } = require('../lib/msgGenerator');

// Mock the repository and message generator
jest.mock('../repository/greeting', () => ({
  getUsersAreOnBirthday: jest.fn()
}));
jest.mock('../lib/msgGenerator', () => ({
  genGreetingMessageBasedOnGender: jest.fn()
}));

describe('birthdayGreeting Controller', () => {
  it('should return birthday greetings based on gender', async () => {
    // Arrange
    const mockUsers = [
      { firstname: 'John', gender: 'Male' },
      { firstname: 'Jane', gender: 'Female' }
    ];
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    repository.getUsersAreOnBirthday.mockResolvedValue(mockUsers);
    genGreetingMessageBasedOnGender.mockImplementation((name, gender) => {
      return gender === "Male" ?
        { title: "Subject: Happy Birthday!", content: `Happy birthday, dear ${name}!\nWe offer special discount 20% off for the following items:\nWhite Wine, iPhone X` } :
        { title: "Subject: Happy Birthday!", content: `Happy birthday, dear ${name}!\nWe offer special discount 50% off for the following items:\nCosmetic, LV Handbags` };
    });

    // Act
    await birthdayGreeting(mockReq, mockRes);

    // Assert
    expect(repository.getUsersAreOnBirthday).toHaveBeenCalled();
    expect(genGreetingMessageBasedOnGender).toHaveBeenCalledWith('John', 'Male');
    expect(genGreetingMessageBasedOnGender).toHaveBeenCalledWith('Jane', 'Female');
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({
      data: mockUsers.map(user => genGreetingMessageBasedOnGender(user.firstname, user.gender))
    });
  });

  // Add more test cases as necessary
});
