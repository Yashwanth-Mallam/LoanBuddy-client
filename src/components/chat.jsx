import React, { useEffect, useState } from "react";

const ChatComponent = () => {
  const [users, setUsers] = useState([]);
  const [openChats, setOpenChats] = useState([]);
  const [messages, setMessages] = useState({});
  const [newMessages, setNewMessages] = useState({});

  const currentUser = "User1"; // Simulated current user

  // Simulated online users
  const mockUsers = ["User2", "User3", "User4"];

  // Simulated past messages
  const mockMessages = {
    User2: [
      { sender: "User2", content: "Hey User1!" },
      { sender: "User1", content: "Hi User2, how are you?" },
    ],
    User3: [
      { sender: "User3", content: "Yo!" },
      { sender: "User1", content: "Hey there!" },
    ],
    User4: [
      { sender: "User4", content: "Long time no chat!" },
    ],
  };

  useEffect(() => {
    // Load hardcoded users
    setUsers(mockUsers);
  }, []);

  const openChat = (username) => {
    if (!username || openChats.includes(username)) return;

    setOpenChats([...openChats, username]);
    setMessages(prev => ({
      ...prev,
      [username]: mockMessages[username] || [],
    }));
  };

  const sendMessageHandler = (username) => {
    if (!newMessages[username]?.trim()) return;

    const chatMessage = {
      sender: currentUser,
      content: newMessages[username],
    };

    setMessages(prev => ({
      ...prev,
      [username]: [...(prev[username] || []), chatMessage],
    }));

    setNewMessages(prev => ({ ...prev, [username]: "" }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Welcome, {currentUser}!</h2>

      {/* Select User to Chat */}
      <select
        onChange={(e) => openChat(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="">Select a User</option>
        {users.map(user => (
          <option key={user} value={user}>{user}</option>
        ))}
      </select>

      {/* Open Chat Windows */}
      {openChats.map(username => (
        <div key={username} className="mb-4 p-4 border rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Chat with {username}</h3>
          <div className="border p-2 h-40 overflow-y-auto bg-gray-100 rounded">
            {messages[username]?.map((msg, index) => (
              <p key={index} className="text-sm">
                <strong>{msg.sender}:</strong> {msg.content}
              </p>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessages[username] || ""}
              onChange={(e) =>
                setNewMessages(prev => ({ ...prev, [username]: e.target.value }))
              }
              onKeyDown={(e) => e.key === "Enter" && sendMessageHandler(username)}
              className="border p-2 flex-1 rounded-l"
            />
            <button
              onClick={() => sendMessageHandler(username)}
              className="bg-blue-500 text-white px-4 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;
