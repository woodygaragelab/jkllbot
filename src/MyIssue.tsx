import React, { useState, useEffect } from "react";
// import axios from "axios";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

const MyIssue: React.FC = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
  }, []);

  return (
    <Paper elevation={2} sx={{ p: 2, maxWidth: 800, mx: 1, mt: 1 }}>
    <Typography variant="h6" gutterBottom>あなたの課題</Typography>
      <Box sx={{ height: 400, width: 700, overflowY: "auto", border: 1, p: 1, mb: 2 }}>
        <TextField
          fullWidth
          multiline
          rows="10"
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your issues ..."
        />
      </Box>
      <Button variant="contained" color="primary">
          Save
        </Button>
    </Paper>
  );
};

export default MyIssue;