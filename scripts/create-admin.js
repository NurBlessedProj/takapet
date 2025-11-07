const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Admin User Schema (same as in the model)
require("dotenv").config();

const IrishWolfhoundAdminUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [30, "Username cannot exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "super_admin"],
      default: "admin",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const IrishWolfhoundAdminUser =
  mongoose.models.IrishWolfhoundAdminUser ||
  mongoose.model(
    "IrishWolfhoundAdminUser",
    IrishWolfhoundAdminUserSchema
  );

async function createAdminUser() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGO;

    if (!mongoUri) {
      throw new Error("MONGO environment variable is not set");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");

    // Check if admin user already exists
    const existingAdmin = await IrishWolfhoundAdminUser.findOne({
      $or: [
        { username: "admin" },
        { email: "admin@irishwolfhoundpuppies.com" },
      ],
    });

    if (existingAdmin) {
      console.log("Admin user already exists!");
      console.log("Username:", existingAdmin.username);
      console.log("Email:", existingAdmin.email);
      console.log("Role:", existingAdmin.role);
      return;
    }

    // Create new admin user
    const adminUser = new IrishWolfhoundAdminUser({
      username: "admin",
      email: "admin@irishwolfhoundpuppies.com",
      password: "admin123", // This will be hashed by the pre-save middleware
      role: "super_admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully!");
    console.log("Username: admin");
    console.log("Email: admin@irishwolfhoundpuppies.com");
    console.log("Password: admin123");
    console.log("Role: super_admin");
    console.log(
      "\n⚠️  IMPORTANT: Change the default password after first login!"
    );
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run the script
createAdminUser();
