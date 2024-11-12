import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
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
      async authorize(credentials: any) {
        await connect();

        try {
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
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid password.");
          }

          // Return user object if credentials are valid and email is verified
          return user;
        } catch (err: any) {
          console.error("Authorization error:", err);
          throw new Error(err.message || "Authentication failed.");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user }: { user: any }) {
      // Sign-in logic is handled in `authorize`
      return true;
    },
    async session({ session, token }) {
      // Attach user ID and email to the session object
      if (token && session.user) {
        session.user.id = token.sub;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
      }
      return token;
    },
  },

  session: {
    strategy: "jwt" as SessionStrategy,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  pages: {
    signIn: "/login",
    error: "/login", // Redirect to the login page on error
  },
};

// Define handler for NextAuth with GET and POST exports
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
