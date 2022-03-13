const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected successfully!");
  } catch (error) {
    console.log("MongoDB connection error!", error);
  }
};

module.exports = connectDB;
