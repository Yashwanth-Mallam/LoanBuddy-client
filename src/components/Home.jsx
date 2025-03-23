import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Navbar from './navbar';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  MessageCircle,
  Calendar,
  AlertCircle
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('borrowing');

  const loanListings = [
    {
      id: 1,
      amount: 5000,
      interest: 8.5,
      duration: '12 months',
      purpose: 'Business Expansion',
      risk: 'Low',
      lender: {
        id: 'lender1',
        name: 'Sarah Johnson',
        rating: 4.8,
        totalLoans: 15,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
      },
      borrower: {
        id: 'borrower1',
        name: 'Michael Chen',
        creditScore: 720,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
      },
      status: 'Active',
      startDate: '2024-03-01',
      dueDate: '2025-03-01',
      nextPayment: '2024-04-01',
      paymentsMade: 1,
      totalPayments: 12
    },
    {
      id: 2,
      amount: 2000,
      interest: 10,
      duration: '6 months',
      purpose: 'Education',
      risk: 'Medium',
      lender: {
        id: 'lender2',
        name: 'David Wilson',
        rating: 4.5,
        totalLoans: 8,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
      },
      borrower: {
        id: 'borrower2',
        name: 'Emily Rodriguez',
        creditScore: 680,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
      },
      status: 'Pending',
      startDate: '2024-03-15',
      dueDate: '2024-09-15',
      nextPayment: '2024-04-15',
      paymentsMade: 0,
      totalPayments: 6
    }
  ];

  const handleChatClick = (userId) => {
    navigate(`/chat/${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatCard
          icon={<DollarSign className="h-6 w-6 text-green-600" />}
          title="Total Volume"
          value="$250,000"
        />
        <StatCard
          icon={<Users className="h-6 w-6 text-blue-600" />}
          title="Active Users"
          value="1,234"
        />
        <StatCard
          icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
          title="Avg. Interest Rate"
          value="9.5%"
        />
        <StatCard
          icon={<Clock className="h-6 w-6 text-orange-600" />}
          title="Avg. Loan Duration"
          value="8 months"
        />
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('borrowing')}
              className={`${
                activeTab === 'borrowing'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Available Lenders
            </button>
            <button
              onClick={() => setActiveTab('lending')}
              className={`${
                activeTab === 'lending'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Loan Requests
            </button>
          </nav>
        </div>
      </div>

      {/* Loan Listings */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {activeTab === 'borrowing' ? 'Available Lenders' : 'Active Loan Requests'}
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {loanListings.map((loan) => (
            <div key={loan.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={activeTab === 'borrowing' ? loan.lender.avatar : loan.borrower.avatar}
                    alt="Profile"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {activeTab === 'borrowing' ? loan.lender.name : loan.borrower.name}
                    </h3>
                    <div className="mt-1 flex items-center">
                      {activeTab === 'borrowing' ? (
                        <>
                          <span className="text-sm text-gray-500">Rating: {loan.lender.rating}/5</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm text-gray-500">{loan.lender.totalLoans} loans funded</span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-500">Credit Score: {loan.borrower.creditScore}</span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleChatClick(activeTab === 'borrowing' ? loan.lender.id : loan.borrower.id)}
                  className="flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>Chat</span>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Loan Details</h4>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-gray-900">Amount: ${loan.amount}</p>
                    <p className="text-sm text-gray-900">Interest: {loan.interest}% APR</p>
                    <p className="text-sm text-gray-900">Duration: {loan.duration}</p>
                    <p className="text-sm text-gray-900">Purpose: {loan.purpose}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Payment Schedule</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Start: {format(new Date(loan.startDate), 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Due: {format(new Date(loan.dueDate), 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-2 text-gray-400" />
                      <span>Next Payment: {format(new Date(loan.nextPayment), 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <div className="mt-2 space-y-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      loan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {loan.status}
                    </span>
                    <p className="text-sm text-gray-900">
                      Payments: {loan.paymentsMade}/{loan.totalPayments}
                    </p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      loan.risk === 'Low' ? 'bg-green-100 text-green-800' :
                      loan.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {loan.risk} Risk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="p-2 rounded-lg">{icon}</div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;