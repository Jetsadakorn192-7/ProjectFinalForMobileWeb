import React from 'react';
import Attendance from './components/Attendance';
import QnA from './components/QnA';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <h1>Student Attendance and Q&A</h1>
      <Attendance />
      <QnA />
    </Container>
  );
}

export default App;