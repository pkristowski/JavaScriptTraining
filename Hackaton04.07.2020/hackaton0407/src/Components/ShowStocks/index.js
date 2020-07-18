import React from 'react'
import './style.css';
import TradingViewWidget from '../../../node_modules/react-tradingview-widget';

export default function ShowStock() {
    return (
        <div className="stocks" style={{height:"210px", width:"220px"}}>
        <TradingViewWidget symbol="NASDAQ:AAPL" />
        </div>
    );
}