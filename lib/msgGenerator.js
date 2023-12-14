const genGreetingMessageBasedOnGender = (firstName, gender) => {
  if (gender === "Male") {
    return {
      "title": "Subject: Happy Birthday!",
      "content": `Happy birthday, dear ${firstName}!\nWe offer special discount 20% off for the following items:\nWhite Wine, iPhone X`
    };
  } else {
    return {
      "title": "Subject: Happy Birthday!",
      "content": `Happy birthday, dear ${firstName}!\nWe offer special discount 50% off for the following items:\nCosmetic, LV Handbags`
    };
  }
};

module.exports = {
  genGreetingMessageBasedOnGender
}