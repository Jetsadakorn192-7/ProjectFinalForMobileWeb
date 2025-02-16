import React from 'react';
import { Button, TextField } from '@mui/material';

function QnA() {
  return (
    <div>
      <h2>Q&A Session</h2>
      <TextField label="Question" variant="outlined" multiline rows={4} />
      <Button variant="contained" color="secondary">Submit Question</Button>
    </div>
  );
}

export default QnA;