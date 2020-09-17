const { urlencoded } = require("express");
const express = require("express");
const db = require("./config/mongoose");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");

// middleware
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
