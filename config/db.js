const mongoose = require("mongoose");
const colors = require("colors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${mongoose.connection.host} / ${process.env.MONGO_URL} / ${process.env.dbName} `.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;