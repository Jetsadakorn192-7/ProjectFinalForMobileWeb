import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth, googleProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "../config/firebase";
import "../styles/Login.css";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
      alert(`Logged in as ${result.user.displayName}`);
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
  };

  const sendOtp = async () => {
    setupRecaptcha();
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const credential = await confirmationResult.confirm(verificationCode);
      console.log("User Info:", credential.user);
      alert(`Logged in as ${credential.user.phoneNumber}`);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {/* Google Login */}
      <button className="google-btn" onClick={handleGoogleLogin}>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" />
        Login with Google
      </button>

      <hr className="divider" />

      {/* Phone Login */}
      <div className="phone-login">
        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input-field"
        />
        <button className="btn send-btn" onClick={sendOtp}>
          Send OTP
        </button>

        <input 
          type="text" 
          placeholder="Enter OTP" 
          value={verificationCode} 
          onChange={(e) => setVerificationCode(e.target.value)}
          className="input-field"
        />
        <button className="btn verify-btn" onClick={verifyOtp}>
          Verify OTP
        </button>
      </div>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
