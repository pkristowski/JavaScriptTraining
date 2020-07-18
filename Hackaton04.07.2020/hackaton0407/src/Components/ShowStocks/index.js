import React from 'react'
import './style.css';
import TradingViewWidget from '../../../node_modules/react-tradingview-widget';

export default function ShowStock() {
    return (

        <TradingViewWidget symbol="NASDAQ:AAPL" />
    );
}