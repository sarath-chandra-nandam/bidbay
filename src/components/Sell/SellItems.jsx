import React, { useEffect, useState } from 'react';
import './SellItems.css';
import { db, auth } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const AuctionItem = ({ item }) => {
  return (
    <div className='sellitems-total-bid-items'>
      <div className="sellitems-bid-item">
        <img src={item.images[0]} alt={item.itemName} />
        <div className="sellitems-bid-details">
          <h2>{item.itemName}</h2>
          <p>{item.additionalInfo}</p>
        </div>
      </div>
      <div className="bid-go-to">
        {/* Navigate to BiddingMeeting component with the item ID */}
        <Link to={`/auction/${item.id}`}>Go To Auction</Link>

      </div>
    </div>
  );
};

const SellItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(collection(db, 'bids', user.uid, 'userBids'));
        const querySnapshot = await getDocs(q);

        const fetchedItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(fetchedItems);
      }

      setLoading(false);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sellitems-container">
      <h1>Your Auction Items</h1>
      <div className="auction-items">
        {items.length > 0 ? (
          items.map(item => (
            <AuctionItem key={item.id} item={item} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default SellItems;
