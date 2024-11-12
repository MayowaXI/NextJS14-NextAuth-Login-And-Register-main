import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
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

  user.isVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpires = undefined;
  await user.save();

  return new NextResponse("Email verified successfully", { status: 200 });
};
