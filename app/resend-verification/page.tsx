"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const ResendVerification = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const message = await response.text();

      if (response.ok) {
        toast.success("Verification email sent. Please check your inbox.");
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to resend verification email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Resend Verification Email</h1>
      <form className="mt-4 space-y-4" onSubmit={handleResend}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded bg-blue-600 text-white font-bold ${
            loading ? "opacity-50" : ""
          }`}
        >
          {loading ? "Sending..." : "Resend Email"}
        </button>
      </form>
    </div>
  );
};

export default ResendVerification;
