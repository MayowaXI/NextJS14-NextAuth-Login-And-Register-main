"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    positionAppliedFor: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }

    if (!formData.positionAppliedFor.trim()) {
      newErrors.positionAppliedFor = "Position is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted =
        "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 400) {
        const errorText = await res.text();
        toast.error(errorText);
        setErrors({ form: errorText });
      } else if (res.status === 200) {
        setSuccessMessage(
          "Application submitted successfully. Please check your email to verify your account."
        );
        toast.success(
          "Application submitted successfully. Please verify your email."
        );
      } else {
        toast.error("An unexpected error occurred");
        setErrors({ form: "An unexpected error occurred" });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error, please try again");
      setErrors({ form: "Error, please try again" });
    } finally {
      setLoading(false);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-col items-center">
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
            Submit Your Application
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {successMessage ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-600">
                  {successMessage}
                </h2>
                <p className="mt-4">
                  Didn't receive an email?{" "}
                  <Link
                    href="/resend-verification"
                    className="text-blue-500 underline"
                  >
                    Resend Verification Email
                  </Link>
                </p>
                <p className="mt-4">
                  <Link
                    href="/login"
                    className="text-blue-500 underline"
                  >
                    Go to Login
                  </Link>
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Date of Birth
                  </label>
                  <input
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dateOfBirth: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-600 text-sm">
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>

                {/* Position Applied For */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Position Applied For
                  </label>
                  <input
                    name="positionAppliedFor"
                    type="text"
                    value={formData.positionAppliedFor}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        positionAppliedFor:
                          e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.positionAppliedFor && (
                    <p className="text-red-600 text-sm">
                      {errors.positionAppliedFor}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword:
                          e.target.value,
                      })
                    }
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-sm">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                  <input
                    name="termsAccepted"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        termsAccepted: e.target.checked,
                      })
                    }
                    required
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="termsAccepted"
                    className="ml-3 text-sm text-gray-900"
                  >
                    Accept our{" "}
                    <Link
                      href="/terms"
                      className="text-blue-500 underline"
                    >
                      terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-500 underline"
                    >
                      privacy policy
                    </Link>
                  </label>
                </div>
                {errors.termsAccepted && (
                  <p className="text-red-600 text-sm">
                    {errors.termsAccepted}
                  </p>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-md font-semibold text-white ${
                      loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    {loading
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>
                  {/* Display Form Error Message */}
                  {errors.form && (
                    <p className="text-red-600 text-center mt-4">
                      {errors.form}
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

export default ApplicationForm;
