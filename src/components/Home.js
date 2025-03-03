import { motion } from "framer-motion";
import {  DollarSign, FileText, ShieldCheck } from "lucide-react";

export default function LoanBuddyHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-whit e-800 to-black text-white">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Loan Buddy</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-purple-400">Home</a>
          <a href="#" className="hover:text-purple-400">Apply for Loan</a>
          <a href="#" className="hover:text-purple-400">Loan Types</a>
          <a href="#" className="hover:text-purple-400">FAQs</a>
          <a href="#" className="hover:text-purple-400">Contact</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-purple-700 text-white shadow-lg">
        <h1 className="text-5xl font-bold">Get Instant Loans with Loan Buddy</h1>
        <p className="mt-4 text-lg">Hassle-free loans at your fingertips</p>
        <button className="mt-6 bg-white text-purple-700 hover:bg-gray-200 px-4 py-2 rounded">Apply Now</button>
      </motion.div>

      {/* Middle Content */}
      <div className="py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="p-6 text-center bg-purple-900 text-white shadow-md rounded-lg">
          <DollarSign className="text-4xl text-purple-400 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Flexible Loan Amounts</h2>
          <p className="mt-2">Choose the loan amount that suits your needs.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="p-6 text-center bg-purple-900 text-white shadow-md rounded-lg">
          <FileText className="text-4xl text-purple-400 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Minimal Documentation</h2>
          <p className="mt-2">Apply with simple and easy documentation.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="p-6 text-center bg-purple-900 text-white shadow-md rounded-lg">
          <ShieldCheck className="text-4xl text-purple-400 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Secure & Trusted</h2>
          <p className="mt-2">Your transactions are safe and secure.</p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center py-6 bg-purple-900 text-white shadow-lg">
        <p>&copy; 2025 Loan Buddy. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}