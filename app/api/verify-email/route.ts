import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/utils/email";

export const GET = async (request: any) => {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    // Validate token
    if (!token) {
      console.error("Token is missing.");
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // Establish database connection
    try {
      await connect();
    } catch (dbError) {
      console.error("Database connection failed:", dbError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    // Find the user with the token and ensure it's not expired
    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      console.error("User not found or token expired.");
      const redirectUrl = new URL("/email-verified-failure", "https://fixing-repo.com");
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
      console.error("Failed to send welcome email:", emailError);
    }

    // Redirect to the email verified success page
    const redirectUrl = new URL("/email-verified-success", request.url);
    return NextResponse.redirect(redirectUrl);

  } catch (error) {
    console.error("Error during email verification process:", error);
    return NextResponse.json(
      { error: "An error occurred during email verification." },
      { status: 500 }
    );
  }
};
