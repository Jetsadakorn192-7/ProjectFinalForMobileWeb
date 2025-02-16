import React from 'react';
import { Button, TextField } from '@mui/material';

function Attendance() {
  return (
    <div>
      <h2>Check Attendance</h2>
      <TextField label="Student Name" variant="outlined" />
      <Button variant="contained" color="primary">Submit</Button>
    </div>
  );
}

export default Attendance;