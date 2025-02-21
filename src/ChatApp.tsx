import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
}

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("https://your-api-gateway-url/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "User" };

    try {
      await axios.post("https://your-api-gateway-url/messages", newMessage);
      setInput("");
      fetchMessages();
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h6" gutterBottom>Chat App</Typography>
      <Box sx={{ height: 300, overflowY: "auto", border: 1, p: 1, mb: 2 }}>
        {messages.map((msg) => (
          <Typography key={msg.id} variant="body2" sx={{ mb: 1 }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default ChatApp;
