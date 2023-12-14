const { genGreetingMessage } = require('./msgGenerator');

describe('genGreetingMessage', () => {
  it('should generate a birthday message with the given last and first names', () => {
    const lastName = 'Doe';
    const firstName = 'John';
    
    const expectedMessage = {
      title: "Subject: Happy Birthday!",
      content: `Happy birthday, dear ${lastName}, ${firstName}!`
    };

    const result = genGreetingMessage(lastName, firstName);

    expect(result).toEqual(expectedMessage);
  });
});