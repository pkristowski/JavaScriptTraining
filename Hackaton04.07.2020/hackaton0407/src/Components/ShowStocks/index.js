import React from 'react'
import './style.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function ShowStock() {
    return (
        <div className="stocks">
            <TradingViewWidget
                symbol="NASDAQ:TSLA"
                theme={Themes.DARK}
                locale="en"
                autosize
            />
        </div>
    );
}