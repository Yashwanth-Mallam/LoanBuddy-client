import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Shield, TrendingUp, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Peer-to-Peer Lending Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect directly with lenders and borrowers. No banks, no hassle.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/learn-more"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose LoanBuddy?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-12 w-12 text-indigo-600" />}
              title="Direct Connection"
              description="Connect directly with lenders or borrowers without intermediaries"
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-indigo-600" />}
              title="Secure Platform"
              description="Your transactions and personal information are protected"
            />
            <FeatureCard
              icon={<TrendingUp className="h-12 w-12 text-indigo-600" />}
              title="Better Returns"
              description="Get better interest rates than traditional banking"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who are already benefiting from peer-to-peer lending
            </p>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;