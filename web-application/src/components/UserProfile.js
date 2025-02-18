import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        // ดึงข้อมูลโปรไฟล์จาก Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          setProfileData(userDoc.data());
        } else {
          console.log('No user profile found in Firestore');
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          {profileData && (
            <>
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Phone:</strong> {profileData.phone}</p>
            </>
          )}
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default UserProfile;
