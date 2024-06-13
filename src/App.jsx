import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const data = [
    'https://wallpapers.com/images/high/ultra-hd-3840-x-2160-wallpaper-fqf0w30lr2xtmcib.webp',
    'https://wallpapers.com/images/high/ultra-hd-3840-x-2160-wallpaper-ltf8fcsers50id11.webp',
    'https://wallpapers.com/images/high/ultra-hd-3840-x-2160-wallpaper-ry3wbr9k5ed2m6bn.webp'
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data]);

  const handleNext = () => {
    setImageIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setImageIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container">
      <button className="prev" onClick={handlePrev}>Prev</button>
      <img src={data[imageIndex]} alt="Mountain" className="image" />
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
