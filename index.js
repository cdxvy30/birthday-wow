const express = require('express');
const app = express();
const port = 5050;
const greetingRouter = require('./router/greeting');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

app.use("/api/v2/greeting", greetingRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});