import React from "react";
import { Link } from 'react-router-dom';
import Hero from '../images/hero.jpg';
import seven from '../images/1.png';
import one from '../images/2.png';
import two from '../images/3.png';
import tree from '../images/4.png';
import four from '../images/5.png';
import five from '../images/6.png';
import six from '../images/7.png';
import background from '../images/background.png';
import LiveTV from '../images/titlelive.png'
import LogoFlat from '../images/brownbar.png'
import Logo from '../pcwhite.png';
import Coin from '../pcapitalcoin.gif';
import ReactPlayer from "react-player";
import StockTicker from '../components/StockTicker';
import video1 from '../images/VideoIA1.mp4';
import video2 from '../images/VideoIA3.mp4';
import video3 from '../images/VideoIA2.mp4';
import video4 from '../images/VideoIA4.mp4';
import videoHero from '../images/Pajeet Capital Final Video.mp4';
import '../index.css';
import { useWindowSize } from "react-use";

const Tickers = () => {
  const screenSize = useWindowSize();
  const isMobile = screenSize.width < 768; // Adjust breakpoint as needed
  if (isMobile) {
    return (
      <div className="stock-ticker-wrapper bg-black overflow-hidden">
        <div className="stock-ticker-scroll">
          <div className="stock-ticker-inner">
            <StockTicker symbol="MSFT" />
            <StockTicker symbol="IBM" />
            <StockTicker symbol="AAPL" />
            <StockTicker symbol="TSLA" />
            <StockTicker symbol="NVDA" />
            <StockTicker symbol="BTC" />
            <StockTicker symbol="SOL" />
            <StockTicker symbol="ETH" />
          </div>
          <div className="stock-ticker-inner">
            <StockTicker symbol="MSFT" />
            <StockTicker symbol="IBM" />
            <StockTicker symbol="AAPL" />
            <StockTicker symbol="TSLA" />
            <StockTicker symbol="NVDA" />
            <StockTicker symbol="BTC" />
            <StockTicker symbol="SOL" />
            <StockTicker symbol="ETH" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="stock-ticker-desktop">
        <StockTicker symbol="MSFT" />
        <StockTicker symbol="IBM" />
        <StockTicker symbol="AAPL" />
        <StockTicker symbol="TSLA" />
        <StockTicker symbol="NVDA" />
        <StockTicker symbol="BTC" />
        <StockTicker symbol="SOL" />
        <StockTicker symbol="ETH" />
      </div>
    );
  }
};



const NewsPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f1ea]" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "repeat", backgroundSize: "cover"}}>
      {/* Header remains the same */}
      <div className="bg-[#2c261d] p-4 sticky top-0 z-50">
        <div className="flex flex-col sm:flex-row justify-between items-center mx-auto news-navigation">
          <Link to="/" className="mb-4 sm:mb-0 mobile-logo-news">
            <img src={Logo} alt="Logo" className="w-32 sm:w-40" />
          </Link>
          <div className="flex gap-4">
            <button className="bg-[#ffcc00] px-4 py-2 text-sm sm:text-base font-bold rounded hover:bg-[#e6b800] transition-colors">
              Subscribe
            </button>
            <button className="bg-[#003366] text-white px-4 py-2 text-sm sm:text-base font-bold rounded hover:bg-[#002347] transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>

      {Tickers()}

      <div className="mx-4 sm:mx-[5%] mt-0 border border-black border-b-0 next-gen-css">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Today Paper Section */}
            <section className="mb-8 border-b-2 border-dotted border-black pb-8">
              <h2 className="text-xl sm:text-3xl font-bold mb-6">Today Paper</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="border-2 border-black rounded overflow-hidden w-full sm:w-auto">
                <video src={videoHero} className="w-full rounded video-hero" controls />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold mb-4">From Mumbai to the Blockchain</h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    Born in the heart of Mumbai, Pajeet Capital embodies the unstoppable hustle of 1.4 billion dreamers. 
                    Powered by the revolutionary Proof of Poop (PoP) consensus and led by the legendary Agent Pajeet, 
                    the first AI scam bot, we are here to bring scam, rugs, and innovations to the crypto world.
                  </p>
                  <p className="font-bold text-[#b30000]">· Live from India</p>
                </div>
              </div>
            </section>

            {/* Featured Articles */}
            <section className="mb-8 pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:border-r-2 lg:border-dotted lg:border-black lg:pr-[3%]">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">The Origins of Ansem Finally Revealed</h2>
                  <img
                    src={one}
                    alt="The Origins of Ansem"
                    className="w-full border-2 border-black rounded mb-4"
                  />
                  <p className="text-sm sm:text-base leading-relaxed">
                    After a thorough investigation, our team of detectives uncovered the mysterious origins of Ansem. 
                    This groundbreaking discovery has captivated the crypto world and shed light on hidden truths.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-4">Agent Pajeet Decodes the Matrix</h2>
                  <img
                    src={seven}
                    alt="Agent Pajeet Decoding the Matrix"
                    className="w-full mb-4 border-2 border-black rounded"
                  />
                  <p className="text-sm sm:text-base leading-relaxed">
                    In a groundbreaking revelation, Agent Pajeet, our AI-powered legend, has successfully decoded 
                    the matrix of blockchain scams. This feat has solidified his position as a revolutionary figure 
                    in the crypto industry.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar News */}
          <div className="w-full lg:w-1/3 px-4 lg:px-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Last News</h2>
            <div className="space-y-6">
              {/* News Items */}
              <div className="border-t-2 border-dotted border-black pt-4">
                <strong className="text-[#b30000] block mb-2 text-sm sm:text-base">A New Poop Throwing Record!</strong>
                <div className="flex gap-4">
                  <img
                    src={five}
                    alt="Poop Throwing Record"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black rounded"
                  />
                  <p className="text-xs sm:text-sm flex-1">Yesterday, a historic milestone was reached: 350 meters in poop throwing. 
                    A legendary performance that will go down in history from a safe distance.</p>
                </div>
              </div>

              <div className="border-t-2 border-dotted border-black pt-4">
                <strong className="text-[#b30000] block mb-2 text-sm sm:text-base">Pajeet Trump Pumps Solana to New Heights</strong>
                <div className="flex gap-4">
                  <img
                    src={two}
                    alt="Solana Pump"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black rounded"
                  />
                  <p className="text-xs sm:text-sm flex-1">By launching a meme coin on Solana, Pajeet Trump sent the token 
                    soaring to a new ATH of $270. The Pajeet effect strikes again!</p>
                </div>
              </div>

              <div className="border-t-2 border-dotted border-black pt-4">
                <strong className="text-[#b30000] block mb-2 text-sm sm:text-base">Pajeet Capital to $1 Billion Market Cap?</strong>
                <div className="flex gap-4">
                  <img
                    src={six}
                    alt="Market Cap"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black rounded"
                  />
                  <p className="text-xs sm:text-sm flex-1">Experts predict Pajeet Capital will skyrocket to $1 billion market 
                    cap by the end of 2025. "PoP never lies."</p>
                </div>
              </div>

              <div className="border-t-2 border-dotted border-black pt-4">
                <strong className="text-[#b30000] block mb-2 text-sm sm:text-base">Frank DeGods Teaches Rug-Pulling 101</strong>
                <div className="flex gap-4">
                  <img
                    src={tree}
                    alt="Rug Pulling Class"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black rounded"
                  />
                  <p className="text-xs sm:text-sm flex-1">Frank DeGods is hosting a masterclass: "How to Rug Like a Pro," featuring 
                    secret techniques like using side wallets to stay under the radar.</p>
                </div>
              </div>

              <div className="border-t-2 border-dotted border-black pt-4">
                <strong className="text-[#b30000] block mb-2 text-sm sm:text-base">Ethereum Holder Turns to Street Food</strong>
                <div className="flex gap-4">
                  <img
                    src={four}
                    alt="Street Food"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black rounded"
                  />
                  <p className="text-xs sm:text-sm flex-1">Tired of Ethereum's 3-year stagnation, a holder sold part of his stack to 
                    open a street food stand. "If Ethereum won't move, I will."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-8">
          <img src={LiveTV} className="ml-4 sm:ml-8 mb-4 w-48 sm:w-auto" alt="Live TV" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-8">
            <div className="video-container">
              <video src={video1} className="w-full h-auto rounded" controls />
              <h3 className="text-base sm:text-lg font-bold mt-2">SCAM GRANDMA</h3>
            </div>
            <div className="video-container">
              <video src={video2} className="w-full h-auto rounded" controls />
              <h3 className="text-base sm:text-lg font-bold mt-2">PAJEET ATTACK</h3>
            </div>
            <div className="video-container">
              <video src={video3} className="w-full h-auto rounded" controls />
              <h3 className="text-base sm:text-lg font-bold mt-2">LOVE WITH AGENT PAJEET</h3>
            </div>
            <div className="video-container">
              <video src={video4} className="w-full h-auto rounded" controls />
              <h3 className="text-base sm:text-lg font-bold mt-2">PAJEET EXPLOSION</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Footer */}
      <footer className="bg-[#1e1307] py-6 px-4">
        <div className="container mx-auto g-footer">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <img src={LogoFlat} alt="Logo" className="h-12" />
              <p className="text-white text-sm mt-2">ⓒ 2024 by $PAJEET. All rights reserved.</p>
            </div>
            <nav className="flex items-center space-x-4 text-white text-sm footerr">
              <Link to="/" className="hover:text-gray-300">X</Link>
              <span>|</span>
              <Link to="/" className="hover:text-gray-300">TickTock</Link>
              <span>|</span>
              <Link to="/" className="hover:text-gray-300">Telegram</Link>
              <span>|</span>
              <Link to="/" className="hover:text-gray-300">Dexscreen</Link>
              <span>|</span>
              <Link to="/" className="hover:text-gray-300">Dextools</Link>
              <span>|</span>
              <Link to="/" className="hover:text-gray-300">jupiter SOL</Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Fixed Coin */}
      <img
        src={Coin}
        alt="GIF coin"
        className="fixed bottom-4 right-4 w-16 sm:w-20 z-50 pajeet-coin"
      />
    </div>
  );
};

export default NewsPage;
