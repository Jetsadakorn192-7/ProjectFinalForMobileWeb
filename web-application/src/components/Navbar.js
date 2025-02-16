import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Attendance and Q&A
        </Typography>
        <Button color="inherit" component={Link} to="/courses">
          Courses
        </Button>
        <Button color="inherit" component={Link} to="/attendance">
          Attendance
        </Button>
        <Button color="inherit" component={Link} to="/qna">
          Q&A
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;