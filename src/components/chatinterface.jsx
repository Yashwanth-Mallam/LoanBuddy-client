import React, { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const currentUser = "User1";
  const chattingWith = "Raj kumar";

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const dummyMessages = [
    { sender: "Raj kumar", content: "Hi! I received your loan request." },
    { sender: "User1", content: "Great! I'm looking to borrow ₹50,000 for 6 months." },
    { sender: "Raj kumar", content: "What will you use the loan for?" },
    { sender: "User1", content: "To expand my small business and buy new stock." },
    { sender: "Raj kumar", content: "Sounds good. I can offer at 10% interest." },
    { sender: "User1", content: "That's fair. When can we proceed?" },
    { sender: "Raj kumar", content: "I'll send the agreement today. We can finalize tomorrow." },
  ];

  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(dummyMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const newChat = {
      sender: currentUser,
      content: newMessage.trim(),
    };
    setMessages((prev) => [...prev, newChat]);
    setNewMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto h-[90vh] flex flex-col bg-white shadow-lg border rounded-lg overflow-hidden">
      {/* Header with user profile */}
      <div className="flex items-center p-4 border-b bg-gray-100">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="font-bold text-lg">{chattingWith}</h2>
          <p className="text-sm text-gray-600">Loan discussion • ₹50,000 • 6 months</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === currentUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-lg text-sm shadow ${
                msg.sender === currentUser
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <div className="p-4 border-t flex bg-white">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="border p-2 rounded-l w-full"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-5 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
