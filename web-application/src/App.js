import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // ควรสร้างเพิ่ม
import Login from './components/Login';
import CourseList from './components/CourseList';
import UserProfile from './components/UserProfile';
import Attendance from './components/Attendance';
import QnA from './components/QnA';

function App() {
  // สมมติว่ามีการเช็คสถานะการล็อกอิน
  const isAuthenticated = false; // ควรใช้ state management หรือ context

  return (
    <Router>
      <Container>
        {isAuthenticated && <Navbar />} {/* แสดง Navbar เมื่อล็อกอินแล้ว */}
        
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Login /> : <Navigate to="/courses" />} 
          />

          {/* Protected Routes */}
          <Route 
            path="/courses" 
            element={isAuthenticated ? <CourseList /> : <Navigate to="/" />} 
          />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <UserProfile /> : <Navigate to="/" />} 
          />
          <Route 
            path="/attendance" 
            element={isAuthenticated ? <Attendance /> : <Navigate to="/" />} 
          />
          <Route 
            path="/qna" 
            element={isAuthenticated ? <QnA /> : <Navigate to="/" />} 
          />

          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;