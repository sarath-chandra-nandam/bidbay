import watch from '../assets/watch.jpeg'
import VintagePainting from '../assets/VintagePainting.jpg'
import vase from '../assets/vase.jpeg'
import coin from '../assets/coin.jpeg'
import sneakers from '../assets/sneakers.jpeg'
import memorabilia from '../assets/memorabilia.jpeg'
import ClassicCar from '../assets/ClassicCar.jpeg'
import rarestamp from '../assets/rarestamp.jpeg'

const cartData = [
    { Bidid: '1', name: 'Luxury Watch', endTime: new Date(Date.now() + 10000).toISOString(), imageUrl: watch, sponsor: 'Timeless Watches Inc.' }, 
    { Bidid: '2', name: 'Vintage Painting', endTime: new Date(Date.now() + 7200000).toISOString(), imageUrl: VintagePainting , sponsor: 'ArtWorks Gallery' }, 
    { Bidid: '3', name: 'Antique Vase', endTime: new Date(Date.now() + 15000).toISOString(), imageUrl: vase, sponsor: 'Antique Emporium' }, 
    { Bidid: '4', name: 'Rare Coin Collection', endTime: new Date(Date.now() + 500000).toISOString(), imageUrl: coin, sponsor: 'NumisMatic Collectibles' }, 
    { Bidid: '5', name: 'Limited Edition Sneakers', endTime: new Date(Date.now() + 3600000).toISOString(), imageUrl: sneakers, sponsor: 'SneakPeak Footwear' }, 
    { Bidid: '6', name: 'Signed Memorabilia', endTime: new Date(Date.now() + 1000000000).toISOString(), imageUrl: memorabilia, sponsor: 'Collectors Haven' }, 
    { Bidid: '7', name: 'Classic Car', endTime: new Date(Date.now() + 5630000000).toISOString(), imageUrl: ClassicCar, sponsor: 'Retro Rides Auctions' }, 
    { Bidid: '8', name: 'Rare Stamp Collection', endTime: new Date(Date.now() + 50000000000).toISOString(), imageUrl: rarestamp, sponsor: 'Philatelic Ventures' }, 
];

export default cartData; 
