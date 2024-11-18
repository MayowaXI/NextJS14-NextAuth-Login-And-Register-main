import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/utils/email";

export const GET = async (request: any) => {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return new NextResponse("Invalid token", { status: 400 });
    }

    await connect();

    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationTokenExpires: { $gt: Date.now() }, // Ensure token hasn't expired
    });

    if (!user) {
      return new NextResponse("Token is invalid or has expired", { status: 400 });
    }

    // Mark the user as verified
    user.isVerified = true;
    user.emailVerificationToken = undefined; // Clear the token
    user.emailVerificationTokenExpires = undefined; // Clear the expiration
    await user.save();

    // Send a follow-up "Welcome" email
    try {
      await sendWelcomeEmail(user.email, user.firstName || "there");
    } catch (emailError) {
      console.error("Failed to send follow-up email:", emailError);
    }

    // Redirect to success page after successful verification
    return NextResponse.redirect("/email-verified-success");
  } catch (err) {
    console.error("Error verifying email:", err);
    return new NextResponse("An error occurred during email verification.", {
      status: 500,
    });
  }
};
