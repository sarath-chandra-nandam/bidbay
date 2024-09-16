import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Sell from './components/Sell/Sell';
import Auctions from './components/Auctions/Auctions';
import Collections from './components/Collections/Collections';
import Contact from './components/Contact/Contact';
import Support from './components/Support/Support';
import SignInSignUpForm from './components/SigninSignup/SignInSignUpForm';
import SignupForm from './components/SignupForm/SignupForm';
import ForgotPassword, { ResetPassword } from './components/ForgotPassword/ForgotPassword';
import AuctionPage2 from './components/Popular/Popular';
import DetailAuctions from './components/Auctions/DetailColectionPage';
import CartPage from './components/CartItems/CartItems';
import Cart from './components/Cart/Cart'; // Import Cart component
import cartData from './assets/cart_collection';
import CartIndividual from './components/CartItems/CartIndividual';
import ChatPage from './components/ChattingPage/ChattingPage';
import Profile from './components/ProfilePage/Profile';
import biddingmeeting1 from './components/Cart/biddingmeeting1';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Update authentication status
      setIsLoading(false); // Stop loading after authentication check
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // or add a spinner here
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sell" element={<Sell />} />
      <Route path="/Auctions" element={<Auctions />} />
      <Route path="/DetialAuctions" element={<DetailAuctions />}>
        <Route path="/DetialAuctions/:Bidid" element={<AuctionPage2 />} />
      </Route>
      <Route path="/Collections" element={<Collections />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/LoginForm" element={!isAuthenticated ? <SignInSignUpForm /> : <Profile />} />
      <Route path="/Cart" element={<CartPage cartItems={cartData} />} >
        <Route path="/Cart/Bidid" element={<Cart />} />
      </Route>
      <Route path="/bidding-meeting" element={<CartIndividual />} >
        <Route path="/bidding-meeting/:Bidid" element={<Cart />} />
      </Route>
      <Route path="/SignupForm" element={<SignupForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password/reset-password" element={<ResetPassword />} />
      <Route path="/chatting" element={<ChatPage />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <SignInSignUpForm />} />
      <Route path="/auction/:Bidid" element={<biddingMeeting1 />} />
    </Routes>
  );
}

export default App;
