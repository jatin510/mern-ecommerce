const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db = mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));

module.exports = db;
