import React, { useEffect, useState } from 'react'
import'./Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import CartLottie from '../../assets/CartLottie.json'
import LogoLottie from '../../assets/LogoLottie.json'
import Aos from 'aos';
import 'aos/dist/aos.css' ;
import HomeLottie from '../../assets/HomeLottie.json'
import SellIconLottie from '../../assets/SellIconLottie.json'
import AuctionLottie from '../../assets/AuctionLottie.json'
import ContactLottie from '../../assets/ContactLottie.json'
import CollectionLottie from '../../assets/CollectionLottie.json'
import SupportLottie from '../../assets/SupportLottie.json'

const Navbar = () => {
    const[menu,setMenu]=useState("Home");
    useEffect(()=>{
      Aos.init({duration:2000},);
    },[]); 
     
  return (
    <div className='navbar'>
        <div className="nav-logo" >
        <div className='LogoLottie'><Lottie loop={true} animationData={LogoLottie}  /></div>
            {/* <img src={logo} alt=''/> */}
            <p>BIDBAY</p>
        </div>
        <ul className="nav-menu" data-aos="fade-down">
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to='/'><div className='HomeLottie'><Lottie loop={true} animationData={HomeLottie}  /></div></Link> {menu=="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Sell")}}><Link style={{textDecoration:'none'}}  to='/Sell'><div className='SellIconLottie'><Lottie loop={true} animationData={SellIconLottie}  /></div></Link> {menu=="Sell"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Auctions")}}><Link style={{textDecoration:'none'}}  to='/Auctions'><div className='AuctionLottie'><Lottie loop={true} animationData={AuctionLottie}  /></div></Link> {menu=="Auctions"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Collections")}}><Link style={{textDecoration:'none'}}  to='/Collections'><div className='CollectionLottie'><Lottie loop={true} animationData={CollectionLottie}  /></div></Link> {menu=="Collections"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Support")}}><Link style={{textDecoration:'none'}}  to='/Support'><div className='SupportLottie'><Lottie loop={true} animationData={SupportLottie}  /></div></Link> {menu=="Support"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Contact")}}><Link style={{textDecoration:'none'}}  to='/Contact'><div className='ContactLottie'><Lottie loop={true} animationData={ContactLottie}  /></div></Link> {menu=="Contact"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/LoginForm'><button>Account</button> </Link>
           <Link to='/Cart'>
            {/* <img src={cart_icon } alt='img'/> */}
            <div className='CartLottie'><Lottie loop={true} animationData={CartLottie}  /></div>
            </Link> 
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
