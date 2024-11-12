
require('dotenv').config();
const mongoose = require("mongoose");

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

testConnection();
