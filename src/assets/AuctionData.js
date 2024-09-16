import watch from '../assets/watch.jpeg';
import VintagePainting from '../assets/VintagePainting.jpg';
import vase from '../assets/vase.jpeg';
import coin from '../assets/coin.jpeg';
import sneakers from '../assets/sneakers.jpeg';
import memorabilia from '../assets/memorabilia.jpeg';
import ClassicCar from '../assets/ClassicCar.jpeg';
import rarestamp from '../assets/rarestamp.jpeg';

const auctionData = [
    { 
        Bidid: '1', 
        name: 'Luxury Watch', 
        description: 'This luxury watch is a masterpiece of craftsmanship, featuring a Swiss movement and diamond-studded bezel.', 
        endTime: new Date(Date.now() + 3600000).toISOString(), 
        imageUrl: watch, 
        sponsor: 'Timeless Watches Inc.' 
    }, 
    { 
        Bidid: '2', 
        name: 'Vintage Painting', 
        description: 'A breathtaking vintage painting depicting a serene landscape, created by a renowned artist of the 19th century.', 
        endTime: new Date(Date.now() + 7200000).toISOString(), 
        imageUrl: VintagePainting , 
        sponsor: 'ArtWorks Gallery' 
    }, 
    { 
        Bidid: '3', 
        name: 'Antique Vase', 
        description: 'An exquisite antique vase with intricate hand-painted floral patterns, originating from the Ming Dynasty.', 
        endTime: new Date(Date.now() + 50000).toISOString(), 
        imageUrl: vase, 
        sponsor: 'Antique Emporium' 
    }, 
    { 
        Bidid: '4', 
        name: 'Rare Coin Collection', 
        description: 'A rare collection of coins from various historical periods and civilizations, including ancient Roman, Greek, and Byzantine coins.', 
        endTime: new Date(Date.now() + 500000).toISOString(), 
        imageUrl: coin, 
        sponsor: 'NumisMatic Collectibles' 
    }, 
    { 
        Bidid: '5', 
        name: 'Limited Edition Sneakers', 
        description: 'Exclusive limited edition sneakers crafted with premium materials and featuring unique designs inspired by street culture.', 
        endTime: new Date(Date.now() + 3600000).toISOString(), 
        imageUrl: sneakers, 
        sponsor: 'SneakPeak Footwear' 
    }, 
    { 
        Bidid: '6', 
        name: 'Signed Memorabilia', 
        description: 'A collection of signed memorabilia including sports jerseys, movie posters, and music albums, autographed by renowned celebrities.', 
        endTime: new Date(Date.now() + 1000000000).toISOString(), 
        imageUrl: memorabilia, 
        sponsor: 'Collectors Haven' 
    }, 
    { 
        Bidid: '7', 
        name: 'Classic Car', 
        description: 'A vintage classic car meticulously restored to its original glory, featuring iconic design elements and powerful performance.', 
        endTime: new Date(Date.now() + 5630000000).toISOString(), 
        imageUrl: ClassicCar, 
        sponsor: 'Retro Rides Auctions' 
    }, 
    { 
        Bidid: '8', 
        name: 'Rare Stamp Collection', 
        description: 'An extensive collection of rare stamps from around the world, showcasing historical events, cultural icons, and artistic motifs.', 
        endTime: new Date(Date.now() + 50000000000).toISOString(), 
        imageUrl: rarestamp, 
        sponsor: 'Philatelic Ventures' 
    }, 
];

export default auctionData;
