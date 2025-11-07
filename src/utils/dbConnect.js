import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Cache the connection to avoid multiple connections
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  try {
    // If we already have a connection, return it
    if (cached.conn) {
      return cached.conn;
    }

    // If we don't have a connection promise, create one
    if (!cached.promise) {
      const mongoURI = process.env.MONGO;

      if (!mongoURI) {
        throw new Error("MONGO environment variable is not set");
      }

      const opts = {
        bufferCommands: false,
        // Remove deprecated options
      };

      cached.promise = mongoose.connect(mongoURI, opts).then((mongoose) => {
        console.log("✅ Connected to MongoDB");
        return mongoose;
      });
    }

    // Wait for the connection promise to resolve
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error("❌ Could not connect to MongoDB:", error.message);
    throw new Error("Could not connect to MongoDB");
  }
};

export default dbConnect;
