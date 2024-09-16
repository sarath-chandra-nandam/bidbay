import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();

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

  if (!user || !profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profileData.profilePicture || '/default-avatar.png'} alt="Profile" className="profile-picture" />
        <h2>{profileData.firstName} {profileData.lastName}</h2>
        <p>Email: {profileData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
