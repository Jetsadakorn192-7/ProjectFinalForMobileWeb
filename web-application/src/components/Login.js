import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you create and modify this CSS file for styling

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Placeholder function to simulate Google sign-in
  const signInWithGoogle = async () => {
    // Simulate successful sign-in
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/courses');
    } catch (error) {
      console.error('Error logging in with Google: ', error);
    }
  };

  const handlePhoneNumberLogin = async () => {
    // Placeholder for phone number authentication
    console.log('Phone number entered:', phoneNumber);
  };

  const handleUsernamePasswordLogin = async () => {
    // Placeholder for username and password authentication
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to Course Management</h2>
        
        <button className="google-login-button" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="phone-login">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handlePhoneNumberLogin}>Login with Phone</button>
        </div>

        <div className="username-password-login">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleUsernamePasswordLogin}>
            Login with Username and Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;