import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env<development/production>.local"
  );
}

const connectTODatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB connection successful in ${NODE_ENV} mode.`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectTODatabase;
