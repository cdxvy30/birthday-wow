const fs = require('fs');
const path = require('path');
const { genGreetingMessage } = require('../lib/msgGenerator');

jest.mock('fs');
jest.mock('path');

describe('genGreetingMessage', () => {
  const mockImagePath = '../public/greeting.jpg';
  const mockBase64Image = 'aGVsbG8=';

  beforeAll(() => {
    path.join.mockReturnValue(mockImagePath);
    fs.readFileSync.mockReturnValue(Buffer.from(mockBase64Image, 'base64'));
  });

  it('should generate a birthday message with an image for users older than 49', () => {
    const firstName = 'John';
    const dateOfBirth = '1970-01-01';
    const expectedImageUrl = `data:image/png;base64,${mockBase64Image}`;

    const message = genGreetingMessage(firstName, dateOfBirth);

    expect(message.title).toBe("Subject: Happy Birthday!");
    expect(message.content).toBe(`Happy birthday, dear ${firstName}!`);
    expect(message.image).toBe(expectedImageUrl);
  });

  it('should generate a birthday message without an image for users 49 or younger', () => {
    const firstName = 'Jane';
    const dateOfBirth = '2000-01-01';

    const message = genGreetingMessage(firstName, dateOfBirth);

    expect(message.title).toBe("Subject: Happy Birthday!");
    expect(message.content).toBe(`Happy birthday, dear ${firstName}!`);
  });
});
