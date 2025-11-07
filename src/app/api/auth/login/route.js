import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import IrishWolfhoundAdminUser from "@/models/IrishWolfhoundAdminUser";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await dbConnect();

    const { username, password } = await request.json();
    console.log("🔍 Login attempt:", {
      username,
      password: password ? "***" : "empty",
    });

    // Validate input
    if (!username || !password) {
      console.log("❌ Missing username or password");
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Find user by username or email
    const user = await IrishWolfhoundAdminUser.findOne({
      $or: [{ username }, { email: username }],
      isActive: true,
    });

    if (!user) {
      console.log("❌ User not found");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("✅ User found:", {
      username: user.username,
      email: user.email,
      isActive: user.isActive,
    });

    // Check if account is locked
    if (user.isLocked) {
      console.log("❌ Account is locked");
      return NextResponse.json(
        {
          error:
            "Account is temporarily locked due to too many failed login attempts",
        },
        { status: 423 }
      );
    }

    // Compare password (plain text comparison)
    console.log("🔐 Comparing password...");
    console.log("   Stored password:", user.password);
    console.log("   Input password:", password);
    const isPasswordValid = user.password === password;
    console.log("🔐 Password comparison result:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ Invalid password, incrementing login attempts");
      // Increment login attempts
      await user.incLoginAttempts();
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Reset login attempts on successful login
    console.log("✅ Password valid, resetting login attempts");
    await user.resetLoginAttempts();

    // Create JWT token
    console.log("🔑 Creating JWT token...");
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET || "mainecoon-admin-secret-key",
      { expiresIn: "24h" }
    );

    // Create response with token
    console.log("📝 Creating response...");
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          lastLogin: user.lastLogin,
        },
      },
      { status: 200 }
    );

    // Set HTTP-only cookie
    console.log("🍪 Setting cookie...");
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/",
    });

    console.log("🎉 Login successful, returning response");
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
