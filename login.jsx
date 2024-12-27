import React, { useState } from "react";
 // Import Tailwind CSS

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    alert("Admin login successful");
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      alert("User login successful");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-indigo-200">
      <div
        className={`relative bg-white rounded-[30px] shadow-lg w-[768px] min-h-[480px] overflow-hidden transition-all duration-300 ${
          isRegistering ? "active" : ""
        }`}
      >
        {/* Admin Login Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center p-10 transition-transform duration-300 ${
            isRegistering ? "translate-x-full" : ""
          }`}
        >
          <form
            id="admin-form"
            onSubmit={handleAdminSubmit}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full p-3 my-2 text-sm bg-gray-200 rounded-lg outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 my-2 text-sm bg-gray-200 rounded-lg outline-none"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 mt-3 text-sm font-semibold text-white uppercase bg-purple-600 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>

        {/* User Login Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center p-10 transition-transform duration-300 ${
            isRegistering ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <form
            id="user-form"
            onSubmit={handleUserSubmit}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-4">User Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 my-2 text-sm bg-gray-200 rounded-lg outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 my-2 text-sm bg-gray-200 rounded-lg outline-none"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 mt-3 text-sm font-semibold text-white uppercase bg-purple-600 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 bg-purple-600 text-white flex flex-col items-center justify-center transition-transform duration-300 ${
            isRegistering ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {isRegistering ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-sm mb-6">
                To keep connected with us, please login with your admin account.
              </p>
              <button
                className="px-5 py-2 border border-white rounded-lg"
                onClick={() => setIsRegistering(false)}
              >
                Admin Login
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Hello, User!</h2>
              <p className="text-sm mb-6">
                Enter your details to log in and start your journey with us.
              </p>
              <button
                className="px-5 py-2 border border-white rounded-lg"
                onClick={() => setIsRegistering(true)}
              >
                User Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
