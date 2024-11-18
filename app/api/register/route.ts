import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { sendVerificationEmail } from "@/utils/email";

export const POST = async (request: any) => {
  try {
    const {
      email,
      password,
      phone,
      positionAppliedFor,
      dateOfBirth,
      lastName,
      firstName,
    } = await request.json();

    await connect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email is already associated with an account." },
        { status: 400 }
      );
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
      phone,
      positionAppliedFor,
      dateOfBirth,
      lastName,
      firstName,
      isVerified: false,
      emailVerificationToken,
      emailVerificationTokenExpires: tokenExpiration,
    });

    // Save the new user to the database
    await newUser.save();

    // Attempt to send the verification email
    try {
      await sendVerificationEmail(email, firstName, emailVerificationToken);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      return NextResponse.json(
        {
          message:
            "Registration successful, but verification email failed to send. Please try resending the verification email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Registration successful. Please verify your email." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error during registration:", err);
    return NextResponse.json(
      { message: "An error occurred during registration." },
      { status: 500 }
    );
  }
};
