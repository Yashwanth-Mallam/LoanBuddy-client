import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { MessageCircle } from 'lucide-react';
import { getAllLendersUserProfile } from '../Api/UserProfileApi';

const HomePage = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getAllLendersUserProfile();
        console.log("Profile data:", data);

        const filteredProfiles = data.filter(profile => profile && profile.user?.type === 'lender');
        setProfiles(filteredProfiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleChatClick = (userId) => {
    navigate(`/chatinterface`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 px-4 sm:px-6 lg:px-8 text-white shadow-md">
        <h1 className="text-3xl font-bold mb-1">Welcome to Loan Buddy!</h1>
        <p className="text-lg">Connect with verified lenders and get the support you need.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Available Lenders
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {profiles.length > 0 ? (
              profiles.map((lender) => (
                <div key={lender.user.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img
                        src={lender.profilePicture || '/default-avatar.png'}
                        alt="Profile"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {lender.firstName} {lender.lastName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {lender.occupation} - {lender.city}, {lender.state}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleChatClick(lender.user.id)}
                      className="flex items-center text-indigo-600 hover:text-indigo-700"
                    >
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span>Chat</span>
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Credit Details</h4>
                      <p className="text-sm text-gray-900">Credit Score: {lender.creditScore}</p>
                      <p className="text-sm text-gray-900">Credit History: {lender.creditHistory}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Financial Info</h4>
                      <p className="text-sm text-gray-900">Income: ${lender.income}</p>
                      <p className="text-sm text-gray-900">Loan Capacity: ${lender.loanCapacity}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Contact</h4>
                      <p className="text-sm text-gray-900">{lender.phoneNumber}</p>
                      <p className="text-sm text-gray-900">{lender.user.email}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 p-6">No lenders available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
