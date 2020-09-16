const express = require("express");
const db = require("./config/mongoose");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
