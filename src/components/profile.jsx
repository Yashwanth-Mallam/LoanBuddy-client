import React, { useState, useEffect } from 'react';
import { User, CreditCard, FileText, Settings, Bell } from 'lucide-react';
import { getUserProfile } from "../Api/UserProfileApi";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        console.log("profile data:",data);
        
        setProfile(data); // Set the profile state
      } catch (err) {
        if (err.response?.status === 404) {
          // If profile not found, set an empty profile
          setProfile({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipCode: "",
            profilePicture: "",
            about: "",
            occupation: "",
            income: "",
            creditScore: "",
            creditHistory: "",
            loanCapacity: "",
            user: {
              id: "",
              name: "",
              email: "",
              type: "",
            },
          });
        } else {
          setError(err.response ? err.response.data.message : err.message);
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);
  

  if (loading) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;
  }

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
                {profile?.profilePicture ? (
                  <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="h-20 w-20 rounded-full"
                  />
                ) : (
                  <User className="h-12 w-12 text-gray-400" />
                )}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {profile?.firstName || "N/A"} {profile?.lastName || ""}
                </h3>
                <p className="text-sm text-gray-500">Member since 2024</p>
              </div>
            </div>

            <nav className="mt-8 space-y-2">
              {["profile", "loans", "documents", "settings", "notifications"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab === "profile" && <User className="h-5 w-5 mr-3" />}
                  {tab === "loans" && <CreditCard className="h-5 w-5 mr-3" />}
                  {tab === "documents" && <FileText className="h-5 w-5 mr-3" />}
                  {tab === "settings" && <Settings className="h-5 w-5 mr-3" />}
                  {tab === "notifications" && <Bell className="h-5 w-5 mr-3" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            {activeTab === "profile" && (
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Profile Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={`${profile?.firstName || ""} ${profile?.lastName || ""}`}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={profile?.user?.email || "N/A"}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="text"
                        value={profile?.phoneNumber || "N/A"}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Occupation</label>
                      <input
                        type="text"
                        value={profile?.occupation || "N/A"}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Income</label>
                      <input
                        type="text"
                        value={`$${profile?.income || "0"}`}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Credit Score</label>
                      <input
                        type="text"
                        value={profile?.creditScore || "N/A"}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea
                      value={`${profile?.address || ""}, ${profile?.city || ""}, ${profile?.state || ""}, ${profile?.zipCode || ""}, ${profile?.country || ""}`}
                      readOnly
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs (loans, documents, settings, etc.) can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
