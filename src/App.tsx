import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MatrixPage from './pages/MatrixPage';
import NewsPage from './pages/NewsPage';
import logo from './pcwhite.png';
import hero from './hero.jpg';

import HeroLeft from './images/left hand.png';
import HeroRight from './images/right hand.png';

function App() {
  const [address, setAddress] = useState<string>('');
  const navigate = useNavigate();

  const handleLeftClick = () => {
    navigate('/matrix');
  };

  const handleRightClick = () => {
    navigate('/news');
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="relative h-screen w-screen overflow-hidden" style={{display: 'flex', flexDirection: 'row'}}>
          {/* Hero Image Background */}
          <div 
            onClick={handleLeftClick}
            className="inset-0 w-full h-full choose-side-el left-hand"
            style={{
              backgroundImage: `url(${HeroLeft})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
            <div 
              onClick={handleRightClick}
            className="inset-0 w-full h-full choose-side-el right-hand"
            style={{
              backgroundImage: `url(${HeroRight})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Title - Adjusted for mobile */}
          <div className="choose-your-side absolute top-[10%] left-1/2 -translate-x-1/2 text-white text-2xl md:text-4xl font-bold tracking-[2px] md:tracking-[4px] z-10 text-center px-4">
            CHOOSE YOUR SIDE
          </div>

          {/* Logo - Adjusted size for mobile */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 w-[30%] md:w-[15%]">
            <img src={logo} alt="Logo"/>
          </div>
        </div>
      } />
      <Route path="/matrix" element={<MatrixPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}

export default App;