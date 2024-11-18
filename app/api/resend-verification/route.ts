import { sendVerificationEmail } from "@/utils/email";
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User";

export const POST = async (request: Request) => {
  const { email } = await request.json();

  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }

  await connect();

  const user = await User.findOne({ email });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  if (user.isVerified) {
    return new NextResponse("Email already verified", { status: 400 });
  }

  // Generate new token
  user.emailVerificationToken = Math.random().toString(36).substring(2); // Replace with your token generation logic
  user.emailVerificationTokenExpires = Date.now() + 3600 * 1000; // 1-hour expiry
  await user.save();

  // Send email
  try {
    await sendVerificationEmail(user.email, user.firstName, user.emailVerificationToken);
    return new NextResponse("Verification email sent", { status: 200 });
  } catch (error) {
    return new NextResponse("Error sending email", { status: 500 });
  }
};
