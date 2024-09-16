import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);

      const fetchUserProfile = async () => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };

      fetchUserProfile();
    }
  }, [auth, db]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/LoginForm'); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user || !profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profileData.profilePicture || '/default-avatar.png'} alt="Profile" className="profile-picture" />
        <h2>{profileData.firstName} {profileData.lastName}</h2>
        <p>Email: {profileData.email}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
      </div>
    </div>
  );
};

export default Profile;
