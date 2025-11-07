import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/utils/dbConnect";
import IrishWolfhoundAdminUser from "@/models/IrishWolfhoundAdminUser";

export async function GET(request) {
  try {
    await dbConnect();

    const token = request.cookies.get("admin-token")?.value;

    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    // Verify JWT token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "mainecoon-admin-secret-key"
    );

    // Check if user still exists and is active
    const user = await IrishWolfhoundAdminUser.findById(decoded.userId).select(
      "-password -loginAttempts -lockUntil"
    );

    if (!user || !user.isActive) {
      return NextResponse.json(
        { error: "User not found or inactive" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        valid: true,
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
  } catch (error) {
    console.error("Token verification error:", error);

    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
