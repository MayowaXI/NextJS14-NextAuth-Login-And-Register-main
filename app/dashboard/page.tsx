import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();

  // Redirect if no session is found
  if (!session) {
    redirect("/");
  }

  // Destructure `user` from `session` safely
  const user = session?.user || { name: "Guest", email: "Not available" };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-black py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-white">Welcome, {user.name}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pending Application Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-full">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m-9 3h12a1 1 0 001-1V6a1 1 0 00-1-1H9m-6 6h6"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-bold text-yellow-600">Application Pending</h2>
                <p className="text-sm text-gray-600">
                  Please verify your identity to complete the application process.
                </p>
              </div>
            </div>
            <button className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
              Verify Identity
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Notifications</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-1"></span>
                <p className="ml-4 text-sm text-gray-600">
                  Your application is being reviewed. (01/12/2024)
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-1"></span>
                <p className="ml-4 text-sm text-gray-600">
                  Email verification completed. (30/11/2024)
                </p>
              </li>
            </ul>
          </div>

          {/* Application Progress */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Application Progress</h2>
            <div className="relative w-full bg-gray-200 rounded-full h-4">
              <div className="absolute bg-blue-600 h-4 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">70% Complete - Pending Identity Verification</p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
            <button className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Update Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
