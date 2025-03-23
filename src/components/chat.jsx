import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Phone, Camera as VideoCamera, Info } from 'lucide-react';

const ChatPage = () => {
  const { userId } = useParams();
  const [message, setMessage] = useState('');

  // Mock data for the chat
  const chatUser = {
    id: userId,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    status: 'online',
    lastSeen: 'Active now'
  };

  const messages = [
    {
      id: 1,
      sender: 'them',
      content: 'Hi, I saw your loan request. Could you tell me more about your business?',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      sender: 'me',
      content: "Hello! Thank you for your interest. I'm looking to expand my online store by adding new product lines.",
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      sender: 'them',
      content: "That sounds interesting! What's your current monthly revenue?",
      timestamp: '10:33 AM'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-100">
      {/* Chat sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
        </div>
        {/* Add chat list here */}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={chatUser.avatar}
              alt={chatUser.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">{chatUser.name}</h3>
              <p className="text-sm text-green-500">{chatUser.lastSeen}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <VideoCamera className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-lg px-4 py-2 rounded-lg ${
                  msg.sender === 'me'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{msg.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === 'me' ? 'text-indigo-200' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;