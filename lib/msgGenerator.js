const fs = require('fs');
const path = require('path');

const genGreetingMessage = (firstName, dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const message = {
    "title": "Subject: Happy Birthday!",
    "content": `Happy birthday, dear ${firstName}!`
  };

  if (age > 49) {
    const imagePath = path.join(__dirname, '../public/greeting.jpg');
    const image = fs.readFileSync(imagePath);
    const base64Image = new Buffer.from(image).toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;
    message.image = imageUrl;
  }

  return message;
};

module.exports = {
  genGreetingMessage
};
