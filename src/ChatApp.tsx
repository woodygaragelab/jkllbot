import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

// const API_URL = "https://8upalv7sa8.execute-api.ap-northeast-1.amazonaws.com/default/jakalulubot";										
const API_URL = "https://myxbf4zyne.execute-api.ap-northeast-1.amazonaws.com/default";

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
    //fetchMessages();
  }, []);

  // const fetchMessages = async () => {
  //   try {
  //     const response = await axios.get(API_URL);
  //     setMessages(response.data);
  //   } catch (error) {
  //     console.error("Error fetching messages", error);
  //   }
  // };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = {										
      text: input,										
      sender: "User",										
      timestamp: new Date().toISOString(),										
    };										
    // setMessages([...messages, { id: Date.now().toString(), ...newMessage }]);		
    var message_history = [...messages, { id: Date.now().toString(), ...newMessage }]
		setMessages(message_history);		
      

    try {
      const response = await axios.post(API_URL, newMessage);			
      const res = response.data.body;															
      console.log(res);
      const resMessage = {										
        text: res,										
        sender: "Bot",										
        timestamp: new Date().toISOString(),										
      };										
      // setMessages([...messages, { id: Date.now().toString(), ...resMessage }]);																	
      message_history = [...message_history, { id: Date.now().toString(), ...resMessage }]
		  setMessages(message_history);		
      
      setInput("");
      // fetchMessages();
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    // <Paper elevation={2} sx={{ p: 2, maxWidth: 400, mx: "auto", mt: 1 }}>
    <Paper elevation={2} sx={{ p: 2, maxWidth: 800, mx: 1, mt: 1 }}>
    <Typography variant="h6" gutterBottom>Chat</Typography>
      <Box sx={{ height: 400, width: 400, overflowY: "auto", border: 1, p: 1, mb: 2 }}>
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