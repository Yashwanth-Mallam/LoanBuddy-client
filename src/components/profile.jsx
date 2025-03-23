import React, { useState } from 'react';
import { User, CreditCard, FileText, Settings, Bell } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    memberSince: 'January 2024',
    creditScore: 750,
    totalLoans: 3,
    activeLoans: 1
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Profile
          </h2>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-12 w-12 text-gray-400" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">Member since {user.memberSince}</p>
              </div>
            </div>

            <nav className="mt-8 space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'profile'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('loans')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'loans'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <CreditCard className="h-5 w-5 mr-3" />
                Loan History
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'documents'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FileText className="h-5 w-5 mr-3" />
                Documents
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'settings'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'notifications'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            {activeTab === 'profile' && (
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Profile Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Credit Score</label>
                      <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900">
                        {user.creditScore}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Active Loans</label>
                      <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900">
                        {user.activeLoans} of {user.totalLoans}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Add content for other tabs as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
