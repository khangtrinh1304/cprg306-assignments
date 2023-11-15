"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
      setError("Failed to sign in with GitHub");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
      setError("Failed to sign out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {user ? (
          <div className="text-center">
            <p className="text-lg font-medium mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Signing Out..." : "Sign Out"}
            </button>
            <br></br>
            <Link href="./week8/shopping-list/"
               className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                Continue shopping
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Signing In..." : "Sign in with GitHub"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
