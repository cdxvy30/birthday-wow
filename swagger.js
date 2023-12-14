const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Birthday Greeting Sample',
    description: 'API document about getting greeting message for people on birthday!',
  },
  host: 'localhost:5050'
};

const outputFile = './docs/swagger.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);