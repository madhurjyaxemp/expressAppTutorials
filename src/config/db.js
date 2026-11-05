import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
const DB_CONNECT = process.env.DB_CONNECTION;

export const connectDB = async function () {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(`MongoDB connection successfull: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDBConnection fail : ${error.message}`);
  }
};
