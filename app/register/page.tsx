"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      toast.error("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters long");
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (confirmPassword !== password) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400) {
        const errorText = await res.text();
        toast.error(errorText);
        setError(errorText);
      } else if (res.status === 200) {
        setError("");
        setSuccessMessage(
          "Registration successful. Please check your email to verify your account."
        );
        toast.success("Registration successful. Please verify your email.");
        // Optionally, redirect after a delay
        // setTimeout(() => {
        //   router.push("/login");
        // }, 5000);
      } else {
        toast.error("An unexpected error occurred");
        setError("An unexpected error occurred");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Error, please try again");
      setError("Error, please try again");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-col items-center">
          <Image src="/logo 1.png" alt="star logo" width={50} height={50} />
          <h2 className="mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Sign up on our website
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {successMessage ? (
              <div>
                <h2 className="text-center text-2xl font-semibold">
                  {successMessage}
                </h2>
                <p className="mt-4 text-center">
                  Didn't receive an email?{" "}
                  <Link href="/resend-verification" className="text-blue-500">
                    Resend Verification Email
                  </Link>
                </p>
                <p className="mt-4 text-center">
                  <Link href="/login" className="text-blue-500">
                    Go to Login
                  </Link>
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900
                      shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                      focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900
                      shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                      focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900
                      shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                      focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Terms and Privacy Policy */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-3 block text-sm leading-6 text-gray-900"
                    >
                      Accept our{" "}
                      <Link href="/terms" className="text-blue-500">
                        terms
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-500">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full border border-black justify-center rounded-md
                    bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                    hover:bg-white transition-colors hover:text-black focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Sign up
                  </button>
                  {/* Display Error Message */}
                  {error && (
                    <p className="text-red-600 text-center text-[16px] my-4">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default RegisterPage;
