import React from "react";
import { Link } from "react-router-dom";
import logo from "../pcwhite.png";
import Coin from '../pcapitalcoin2.gif'

const VoiceFlow = () => {
  return (
    <div className="flex flex-col min-h-screen w-full z-10 px-4 py-2">
      {/* Navigation */}
      <nav className="w-full max-w-4xl mx-auto mb-6" style={{ backgroundColor: 'rgba(1, 55, 32, 0.8)', borderRadius: '25px'}}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 rounded-2xl p-1 matrix-navigation">
          <Link to="/" className="w-32 sm:w20">
            <img src={logo} alt="Logo" className="w-full matrix-logo" />
          </Link>
          <button 
            className="px-8 py-2 font-bold hover:bg-green-400 transition-colors w-full sm:w-auto"
            onClick={() => window.open('https://example.com/buy', '_blank')}
            style={{backgroundColor: "rgba(65, 207, 132, 0.3", borderRadius:"25px", color: "#45d98b"}}>
            Buy
          </button>
        </div>
      </nav>

      {/* Centered Coin */}
      <div className="flex justify-center mb-6">
        <img
          src={Coin}
          className="w-16 sm:w-24 md:w-36 matrix-coin"
          alt="gif"
        />
      </div>

      {/* Voiceflow iframe */}
      <div className="flex-1 w-full max-w-2xl mx-auto matrix-ghost-container">
        <iframe
          src="https://tixaeagents.ai/app/eu/render/x5anjheth7iyizo9/iframe"
          className="w-full h-[60vh] sm:h-[60vh] md:h-[60vh] matrix-ghost"
          title="Pajeet Capital AI Agent"
        />
      </div>
    </div>
  );
};

export default VoiceFlow;