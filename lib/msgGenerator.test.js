const { genGreetingMessage } = require('../lib/msgGenerator');

describe('genGreetingMessage', () => {
  it('should generate a correct greeting message', () => {
    const firstName = 'John';
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear John!"
    };

    const result = genGreetingMessage(firstName);

    expect(result).toEqual(expectedOutput);
  });

  it('should generate a correct greeting message', () => {
    const firstName = 'Robert';
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Robert!"
    };

    const result = genGreetingMessage(firstName);

    expect(result).toEqual(expectedOutput);
  });

  it('should generate a correct greeting message', () => {
    const firstName = 'Cid';
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Cid!"
    };

    const result = genGreetingMessage(firstName);

    expect(result).toEqual(expectedOutput);
  });
});