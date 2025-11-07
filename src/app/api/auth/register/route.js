import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import IrishWolfhoundAdminUser from "@/models/IrishWolfhoundAdminUser";

export async function POST(request) {
  try {
    await dbConnect();

    const { username, email, password, role = "admin" } = await request.json();

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await IrishWolfhoundAdminUser.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this username or email already exists" },
        { status: 409 }
      );
    }

    // Create new admin user
    const newUser = new IrishWolfhoundAdminUser({
      username,
      email,
      password,
      role,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message: "Admin user created successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { error: "Validation error", details: errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
