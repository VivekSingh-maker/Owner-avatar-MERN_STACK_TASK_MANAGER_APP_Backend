const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB_URL;

mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB Connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
