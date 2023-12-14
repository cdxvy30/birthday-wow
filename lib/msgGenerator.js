const genGreetingMessage = (lastName, firstName) => {
  return {
    "title": "Subject: Happy Birthday!",
    "content": `Happy birthday, dear ${lastName}, ${firstName}!`
  };
};

module.exports = {
  genGreetingMessage
};
