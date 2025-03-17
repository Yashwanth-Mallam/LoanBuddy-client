import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://loanbuddy-server.onrender.com/users", {
        fullName,
        email,
        password,
      });
      console.log("User signed up successfully:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <div className="p-8 max-w-sm w-full shadow-lg bg-purple-400 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up for Loan Buddy</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? {" "}
          <button className="text-blue-600 hover:text-blue-800" onClick={handleLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
