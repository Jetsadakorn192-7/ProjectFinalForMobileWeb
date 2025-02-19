import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ใช้ useNavigate สำหรับ React Router 6
import { auth } from "../config/firebase";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ใช้ useNavigate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/"); // ใช้ navigate แทน history.push
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.displayName || "No Name"}</p>
          <p><strong>Email:</strong> {user.email || "No Email"}</p>
          <p><strong>Phone:</strong> {user.phoneNumber || "No Phone"}</p>
          <button onClick={() => auth.signOut().then(() => navigate("/"))}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
