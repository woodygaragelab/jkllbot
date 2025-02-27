import React, { useState, useEffect } from "react";										
import axios from "axios";										
										
interface Message {										
  id: string;										
  text: string;										
  sender: string;										
  timestamp: string;										
}										
										
const API_URL = "https://8upalv7sa8.execute-api.ap-northeast-1.amazonaws.com/default/jakalulubot";										
										
const ChatApp: React.FC = () => {										
  const [messages, setMessages] = useState<Message[]>([]);										
  const [input, setInput] = useState("");										
										
  useEffect(() => {										
    fetchMessages();										
  }, []);										
										
  const fetchMessages = async () => {										
    try {										
      const response = await axios.get(API_URL);										
      setMessages(response.data);										
    } catch (error) {										
      console.error("Error fetching messages:", error);										
    }										
  };										
										
  const sendMessage = async () => {										
    if (!input.trim()) return;										
										
    const newMessage = {										
      text: input,										
      sender: "User",										
      timestamp: new Date().toISOString(),										
    };										
										
    try {										
      await axios.post(API_URL, newMessage);										
      setMessages([...messages, { id: Date.now().toString(), ...newMessage }]);										
      setInput("");										
    } catch (error) {										
      console.error("Error sending message:", error);										
    }										
  };										
										
  return (										
    <div className="flex flex-col max-w-lg mx-auto p-4 border rounded-lg shadow-lg">										
      <div className="h-64 overflow-y-auto border-b p-2">										
        {messages.map((msg) => (										
          <div key={msg.id} className="p-2 border-b">										
            <strong>{msg.sender}:</strong> {msg.text} <br />										
            <small className="text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</small>										
          </div>										
        ))}										
      </div>										
      <div className="flex mt-2">										
        <input										
          className="flex-1 border p-2 rounded-l"										
          type="text"										
          value={input}										
          onChange={(e) => setInput(e.target.value)}										
          placeholder="Type a message..."										
        />										
        <button className="bg-blue-500 text-white p-2 rounded-r" onClick={sendMessage}>										
          Send										
        </button>										
      </div>										
    </div>										
  );										
};										
										
export default ChatApp;										
