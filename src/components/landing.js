import { motion } from "framer-motion";
import { HandCoins, Users, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function LoanBuddyLandingpage() {
  const navigate =useNavigate();

  const handlLogin = () =>{
    console.log("user to login!")
    navigate("/Login");
  }

  const handleSignup = () => {
    console.log("user to signup!")
    navigate("/SignUp")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-black text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center py-20 bg-purple-700 text-white shadow-lg">
        <h1 className="text-5xl font-bold">Loan Buddy</h1>
        <p className="mt-4 text-lg">Connecting lenders and borrowers seamlessly</p>
        <button 
        onClick={handleSignup}
        className="mt-6 bg-white text-purple-700 hover:bg-gray-200 px-4 py-2 rounded">Get Started</button>
        <button 
        onClick={handlLogin}
        className="ml-6 bg-white text-purple-700 hover:bg-gray-200 px-4 py-2 rounded">Login</button>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="p-6 text-center bg-purple-900 text-white shadow-md rounded-lg">
          <HandCoins className="text-4xl text-purple-400 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Easy Loans</h2>
          <p className="mt-2">Quick access to loans with minimal paperwork.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="p-6 text-center bg-purple-900 text-white shadow-md rounded-lg">
          <Users className="text-4xl text-purple-400 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Peer-to-Peer</h2>
          <p className="mt-2">Direct connection between lenders and borrowers.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="p-6 text-center bg-purple-900 text-white shadow-md rounded-lg">
          <Lock className="text-4xl text-purple-400 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Secure Transactions</h2>
          <p className="mt-2">Ensuring safe and secure loan processing.</p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-purple-700 text-white shadow-lg">
        <h2 className="text-3xl font-bold">Join Loan Buddy Today!</h2>
        <p className="mt-4 text-lg">Sign up now and start your loan journey.</p>
        <button 
        onClick={handleSignup}
        className="mt-6 bg-white text-purple-700 hover:bg-gray-200 px-4 py-2 rounded">Sign Up</button>
      </motion.div>
    </div>
  );
}
