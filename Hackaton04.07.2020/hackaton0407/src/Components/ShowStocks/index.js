import React from 'react'
import './style.css';
import TradingViewWidget, { Themes } from '../../../node_modules/react-tradingview-widget';

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