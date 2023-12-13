const genGreetingMessage = ( firstName ) => {
  return {
    "title": "Subject: Happy Birthday!",
    "content": `Happy birthday, dear ${firstName}!`
  };
};

module.exports = {
  genGreetingMessage
}