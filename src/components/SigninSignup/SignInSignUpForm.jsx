import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignInSignUpForm.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import '../../components/firebase'; // Import your Firebase configuration

const SignInSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await setPersistence(auth, browserLocalPersistence); // Set persistence to local

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('loggedInUserId', user.uid);
      navigate('/profile');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await setPersistence(auth, browserLocalPersistence); // Set persistence to local

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: profilePicture ? URL.createObjectURL(profilePicture) : null,
      });

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : null,
      });

      localStorage.setItem('loggedInUserId', user.uid);
      navigate('/profile');
    } catch (error) {
      setError('Error during sign-up. Please try again.');
    }
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div className="form-total">
      <div className={`scontainer ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up">
          <form action="#" className="sign-form" onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
            <button type="submit">Sign Up</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>

        <div className="form-container sign-in">
          <form action="#" className="sign-form" onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgot-password">Forgot your password?</Link>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={handleSignInClick}>Sign In</button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>New here?</h1>
              <p>Sign up and discover a great amount of new opportunities!</p>
              <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpForm;
