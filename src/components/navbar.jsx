import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LoanBuddy</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/home" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Profile
            </Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              <LogIn className="h-4 w-4 mr-1" />
              Logout
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
