import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/utils/email";

export const GET = async (request: any) => {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    // Validate token
    if (!token) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // Establish database connection
    await connect();

    // Find the user with the token and ensure it's not expired
    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      const redirectUrl = new URL("/email-verified-failure", "https://fixing-repo.com/email-verified-success");
// Failure page
      return NextResponse.redirect(redirectUrl);
    
    }

    // Mark the user as verified and clear the token
    user.isVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpires = undefined;
    await user.save();

    // Attempt to send a welcome email
    try {
      await sendWelcomeEmail(user.email, user.firstName || "there");
    } catch (emailError) {
      console.error("Failed to send follow-up email:", emailError);
    }

    // Redirect to the email verified success page
    const redirectUrl = new URL("/email-verified-success", request.url);
    return NextResponse.redirect(redirectUrl);

  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { error: "An error occurred during email verification." },
      { status: 500 }
    );
  }
};
