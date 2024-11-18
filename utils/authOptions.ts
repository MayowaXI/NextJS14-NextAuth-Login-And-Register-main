// lib/authOptions.ts
import { AuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required.");
          }

          // Find user by email
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("No user found with this email.");
          }

          // Check if the user's email is verified
          if (!user.isVerified) {
            throw new Error("Please verify your email before logging in.");
          }

          // Check if password is correct
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordCorrect) {
            throw new Error("Invalid password.");
          }

          // Return user object if credentials are valid and email is verified
          return {
            id: user.id,
            email: user.email,
            firstname: user.firstname, // You can map firstname here if needed
          };
        } catch (error: any) {
          console.error("Authorization error:", error);
          throw new Error(error.message || "Authentication failed.");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // You can handle custom sign-in logic here if needed
      return true;
    },

    async session({ session, token }) {
      // Attach user-related data to session
      if (session.user) {
        session.user.email = token.email;
        session.user.firstname = token.firstname || "Guest"; // Fallback for firstname
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Add user ID to token
        token.email = user.email; // Add email to token
        token.firstname = user.firstname || "Guest"; // Add firstname to token
      }
      return token;
    },
  },

  session: {
    strategy: "jwt" as SessionStrategy,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Ensure this secret is set in your environment variables
    
  },

  pages: {
    signIn: "/login", // Redirect to custom sign-in page
    error: "/login",  // Redirect to the login page on error
  },
};
