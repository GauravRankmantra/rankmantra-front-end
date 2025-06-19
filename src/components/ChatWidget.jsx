import React, { useState, useEffect } from "react";
import { FaComment, FaTimes } from "react-icons/fa";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); 
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [askedName, setAskedName] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setMessages([
      {
        id: "bot-welcome",
        sender: "bot",
        message: "Hi! How can I help you today?",
        timestamp: new Date(),
      },
      {
        id: "bot-name",
        sender: "bot",
        message: "Before we start, may I know your name?",
        timestamp: new Date(),
      },
    ]);
    setAskedName(true);

    socket.on("whatsapp_reply", (msg) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random(),
          sender: "admin",
          message: msg,
          timestamp: new Date(),
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Math.random(),
      sender: "user",
      message: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMsg]);

    if (askedName && !userName) {
      setUserName(input);
      setAskedName(false);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random(),
            sender: "bot",
            message: `Thank you, ${input}! How can I assist you today?`,
            timestamp: new Date(),
          },
        ]);
      }, 500);
    } else {
      socket.emit("user_message", input);
    }

    setInput("");
  };

  return (
    <>
      <div
        className="fixed bottom-8 right-8 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110 ${
            isOpen ? "hidden" : ""
          }`}
          onClick={toggleChat}
        >
          <FaComment className="text-2xl" />
          {isHovered && (
            <div className="absolute right-full mr-2 px-3 py-2 bg-white text-gray-800 text-sm rounded-md shadow-md whitespace-nowrap">
              Any query? Connect with me!
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed lf:bottom-8 lg:right-8 bottom-8 right-8 w-full max-w-md h-[70vh] bg-white rounded-lg shadow-xl z-50 flex flex-col transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 100px)", width: "30%", minWidth: "350px" }}
      >
        <div className="flex justify-between items-center p-4 bg-red-600 text-white rounded-t-lg">
          <h3 className="font-semibold">Live Chat</h3>
          <button onClick={toggleChat} className="p-1 rounded-full hover:bg-red-700 transition-colors">
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-[#FEFAF8]">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs shadow ${
                    msg.sender === "user" ? "bg-orange-100" : "bg-white"
                  }`}
                >
                  <p>{msg.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
