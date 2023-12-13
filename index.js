const express = require('express');
const app = express();
const port = 5050;
const greetingRouter = require('./router/greeting');

app.use("/api/v1/greeting", greetingRouter);

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
})