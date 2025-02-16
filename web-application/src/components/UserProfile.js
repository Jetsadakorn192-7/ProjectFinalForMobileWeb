import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';

function UserProfile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await db.collection('users').doc(auth.currentUser.uid).update(userData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile: ', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({...userData, name: e.target.value})}
          placeholder="Name"
        />
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          placeholder="Email"
        />
        <input
          type="tel"
          value={userData.phone}
          onChange={(e) => setUserData({...userData, phone: e.target.value})}
          placeholder="Phone"
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}