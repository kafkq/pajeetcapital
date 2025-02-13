import React, { useEffect, useState } from "react";

const StockTicker = ({ symbol }) => {
  const [percentageChange, setPercentageChange] = useState(null);
  const [isDown, setIsDown] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=culq709r01qovv70ml40culq709r01qovv70ml4g`
        );
        const data = await response.json();
        
        if (data && data.pc && data.c) {
          const change = ((data.c - data.pc) / data.pc) * 100;
          setPercentageChange(change.toFixed(2));
          setIsDown(change < 0);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, [symbol]);

  return (
    <div className="stock-ticker-item">
      <div className="flex items-center justify-between bg-black px-4 py-2 border-l-2 border-r-2 border-white/20">
        <p className="text-white text-sm font-bold mr-4">
          {symbol}
        </p>
        {percentageChange !== null && (
          <span className={`${isDown ? 'text-red-500' : 'text-green-500'} text-sm whitespace-nowrap`}>
            {isDown ? "▼" : "▲"} {percentageChange}
          </span>
        )}
      </div>
    </div>
  );
};

export default StockTicker;