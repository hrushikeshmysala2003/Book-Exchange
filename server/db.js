const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI;

// console.log(process.env.mongoURI)
const connetToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the database");
  } catch (err) {
    throw err;
  }
};
module.exports = connetToDB;
