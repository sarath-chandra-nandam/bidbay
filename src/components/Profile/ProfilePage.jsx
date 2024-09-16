import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./ProfilePage.css"; // Import the CSS file
import usersData from "../../assets/users.json"; // Import the JSON data

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const userId = parseInt(localStorage.getItem("loggedInUserId"), 10); // Get userId from localStorage

    if (userId) {
      // Find the user by ID
      const loggedInUser = usersData.find(user => user.id === userId);

      if (loggedInUser) {
        setUser(loggedInUser);
      } else {
        console.error("User not found!");
      }
    } else {
      console.error("No user ID found in localStorage!");
    }

    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserId"); // Remove userId from localStorage
    navigate("/LoginForm"); // Redirect to sign-in page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-card">
        <h2>{user.username}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
      </div>
    </div>
  );
};

export default ProfilePage;
