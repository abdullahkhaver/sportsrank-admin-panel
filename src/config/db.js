import mongoose from "mongoose";
import { appConfig } from "./appConfig";
const connectDB = async () => {
  try {
    await mongoose.connect(appConfig.mongoUri); 
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
