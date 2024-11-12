import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { sendVerificationEmail } from "@/utils/email";

export const POST = async (request: any) => {
  try {
    const { email, password } = await request.json();

    await connect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a verification token
    const emailVerificationToken = uuidv4();
    const tokenExpiration = Date.now() + 24 * 60 * 60 * 1000; // Token expires in 24 hours

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      isVerified: false,
      emailVerificationToken,
      emailVerificationTokenExpires: tokenExpiration,
    });

    // Save the new user to the database
    await newUser.save();

    // Attempt to send the verification email
    try {
      await sendVerificationEmail(email, emailVerificationToken);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      // Optionally inform the user to try resending verification email
    }

    return new NextResponse(
      "Registration successful. Please verify your email.",
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error during registration:", err);
    return new NextResponse("An error occurred during registration.", {
      status: 500,
    });
  }
};
