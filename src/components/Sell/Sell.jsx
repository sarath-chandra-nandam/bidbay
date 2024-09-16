import React, { useState } from 'react';
import './Sell.css';
import Lottie from "lottie-react";
import SellPageLottie from '../../assets/SellPageLottie.json'
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import '../../components/firebase'; // Ensure this initializes Firebase
import SellItems from '../Sell/SellItems'

const Sell = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [itemName, setItemName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [bidDateTime, setBidDateTime] = useState('');
  const auth = getAuth(); // Ensure this is correctly initialized
  const db = getFirestore(); // Ensure this is correctly initialized

  const handleBidAmountChange = (event) => {
    setBidAmount(event.target.value);
  };

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setPreviewImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImages((prevImages) => [...prevImages, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
    setSelectedImages(files);
  };

  const handleBidDateTimeChange = (event) => {
    setBidDateTime(event.target.value);
  };




  const handleBidSubmit = async (event) => {
  event.preventDefault();
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('No user logged in');

    // Construct bid data
    const bidData = {
      itemName,
      bidAmount,
      additionalInfo,
      bidDateTime,
      images: selectedImages.map((file) => URL.createObjectURL(file)),
      userId: user.uid,
    };

    // Store bid data in Firestore
    await addDoc(collection(db, 'bids', user.uid, 'userBids'), bidData);
    console.log('Bid submitted successfully');

    // Reload the page
    window.location.reload();
  } catch (error) {
    console.error('Error adding document:', error);
  }
};

  
  
  return (
    <div>
      <div className="sell-total-container">
        <div className="selllottie"><Lottie loop={true} animationData={SellPageLottie} /></div>
        <div className="sell-bid-container">
          <h2>Place Your Bid</h2>
          <form onSubmit={handleBidSubmit} className='sell-form'>
            <div className="form-group">
              <label htmlFor="itemName">Item Name:</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={itemName}
                onChange={handleItemNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bidAmount">Bid Amount:</label>
              <input
                type="number"
                id="bidAmount"
                name="bidAmount"
                value={bidAmount}
                onChange={handleBidAmountChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={additionalInfo}
                onChange={handleAdditionalInfoChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="bidDateTime">Bid Date & Time:</label>
              <input
                type="datetime-local"
                id="bidDateTime"
                name="bidDateTime"
                value={bidDateTime}
                onChange={handleBidDateTimeChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUpload">Upload Images:</label>
              <input
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept="image/*"
                onChange={handleImageChange}
                multiple
              />
            </div>
            <div className="image-preview">
              {previewImages.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Image ${index + 1}`}
                  className="preview-image"
                />
              ))}
            </div>
            <button type="submit">Place Bid</button>
          </form>
        </div>
      </div>
      <SellItems />
    </div>
  );
};

export default Sell;
