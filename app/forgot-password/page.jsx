'use client';

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePasswordReset = async () => {
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setEmail("");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Forgot Password</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handlePasswordReset}
          className="w-full p-3 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600"
        >
          Reset Password
        </button>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <p className="text-gray-400 mt-4 text-center">
          Remembered your password?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

