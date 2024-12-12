"use client";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, loading, user, creatError] =   useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log("User signed up:", user);
      sessionStorage.setItem('user', 'true');
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    if (creatError) {
      if (creatError.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else {
        setError("An error occurred");
      }
    }
  }, [creatError]);

  const handleSignUp = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Signup error:", error); 
      setError("An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
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
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleSignUp}
          disabled={loading} 
          className={`w-full p-3 ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white rounded mt-4 hover:bg-blue-600`}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>} 
        <p className="text-gray-400 mt-2">
            Already have an account?{" "}
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

export default SignUp;
