"use client";

const EmailVerifiedSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-green-600">
        Email Verified Successfully!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Thank you for verifying your email. Please continue your application.
      </p>
      <a
        href="/login"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Login
      </a>
    </div>
  );
};

export default EmailVerifiedSuccess;
