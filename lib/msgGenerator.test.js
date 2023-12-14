const { genGreetingMessage } = require('./msgGenerator');

describe('genGreetingMessage', () => {
  it('should generate a birthday message with the given last and first names', () => {
    const firstName = 'John';
    
    const expectedMessage = {
      title: "Subject: Happy Birthday!",
      content: `Happy birthday, dear ${firstName}!`
    };

    const result = genGreetingMessage(firstName);

    expect(result).toEqual(expectedMessage);
  });
});