const { genGreetingMessageBasedOnGender } = require('../lib/msgGenerator');

describe('genGreetingMessage', () => {
  it('should generate a correct greeting message', () => {
    const firstName = 'Sherry';
    const gender = 'Female'
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Sherry!\nWe offer special discount 50% off for the following items:\nCosmetic, LV Handbags"
    };

    const result = genGreetingMessageBasedOnGender(firstName, gender);

    expect(result).toEqual(expectedOutput);
  });

  it('should generate a correct greeting message', () => {
    const firstName = 'Robert';
    const gender = 'Male';
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Robert!\nWe offer special discount 20% off for the following items:\nWhite Wine, iPhone X"
    };

    const result = genGreetingMessageBasedOnGender(firstName, gender);

    expect(result).toEqual(expectedOutput);
  });

  it('should generate a correct greeting message', () => {
    const firstName = 'Cid';
    const gender = 'Male';
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Cid!\nWe offer special discount 20% off for the following items:\nWhite Wine, iPhone X"
    };

    const result = genGreetingMessageBasedOnGender(firstName, gender);

    expect(result).toEqual(expectedOutput);
  });

  it('should generate a correct greeting message', () => {
    const firstName = 'Peter';
    const gender = 'Male';
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Peter!\nWe offer special discount 20% off for the following items:\nWhite Wine, iPhone X"
    };

    const result = genGreetingMessageBasedOnGender(firstName, gender);

    expect(result).toEqual(expectedOutput);
  });

  it('should generate a correct greeting message', () => {
    const firstName = 'Miki';
    const gender = 'Female'
    const expectedOutput = {
      title: "Subject: Happy Birthday!",
      content: "Happy birthday, dear Miki!\nWe offer special discount 50% off for the following items:\nCosmetic, LV Handbags"
    };

    const result = genGreetingMessageBasedOnGender(firstName, gender);

    expect(result).toEqual(expectedOutput);
  });
});
