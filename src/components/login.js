import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://loanbuddy-server.onrender.com/users"); // Adjust endpoint if needed
      const users = response.data;
      
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      
      if (user) {
        console.log("User logged in successfully!");
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Server error. Please try again later.");
    }
  };

  const handleSignup = () => {
    navigate("/SignUp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <div className="p-8 max-w-sm w-full shadow-lg bg-purple-400 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Loan Buddy
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p className="text-center text-sm text-white-600 mt-4">
          Don't have an account?{" "}
          <button
            className="text-blue-600 hover:text-blue-700"
            onClick={handleSignup}
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
}
