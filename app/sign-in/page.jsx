'use client'
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import {  useState } from "react";
 
const SignIn = () => {
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const router = useRouter()
  const [error, setError] = useState(null); 
  const [showModal, setShowModal] = useState(false);
 
const handleSignIn = async () => {
 
  try {
     await signInWithEmailAndPassword(email, password)
    sessionStorage.setItem('user', 'true')
    setEmail('')
    setPassword('')
    router.push('/')
 
  } catch (error) {
    console.error(error);
    setError("Sign-in failed. Would you like to create an account?");
    setShowModal(true);
  }
  
};
const handleCloseModal = () => {
    setShowModal(false); 
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
      <h1 className="text-white text-2xl mb-5">Sign In</h1>
      {/* FixMe:  Add error Logic */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-700 rounded outline-non text-white placeholder-gray-500"
      />
      <button
        onClick={handleSignIn}
        className="w-full p-3 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600"
      >
        Sign In
      </button><div className="text-center mt-5">
          <p className="text-gray-400">
            Forgot your password?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => router.push("/forgot-password")}
            >
              Reset it here
            </span>
          </p>
          <p className="text-gray-400 mt-2">
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => router.push("/sign-up")}
            >
              Create an Account
            </span>
          </p>
        </div>
      </div>

      {/* Modal to prompt for account creation */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-xl mb-4">Sign-in failed</h2>
            <p className="text-gray-700 mb-4">
              It looks like you don&apos;t have an account. Would you like to create one?
            </p>
            <button
              onClick={() => router.push("/sign-up")}
              className="w-full p-3 bg-blue-500 text-white rounded mb-4 hover:bg-blue-600"
            >
              Create an Account
            </button>
            <button
              onClick={handleCloseModal}
              className="w-full p-3 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
