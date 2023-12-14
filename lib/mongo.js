const mongoose = require('mongoose');

const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const MONGO_HOSTNAME = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DATABASE;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(url, options)
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.error('MongoDB connection failed:', err));

module.exports = mongoose;
