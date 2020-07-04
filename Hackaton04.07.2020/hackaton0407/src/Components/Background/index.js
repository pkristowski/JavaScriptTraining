import React, { useState, useEffect } from 'react';

export default function () {
    const [number, changeNumber] = useState('');

    //Get random number between 1 nad 999
    useEffect(
        () => {
            setInterval(() => {
                const number = Math.floor((Math.random() * 999) + 1);
                changeNumber(number)
            }, 15000);
        }
    )

    return (
        //Show random image from picsum.photos. Size 1000 by 1200
        <img style={{ height: "100%", width: "100%", position: "fixed", top: "0%", left: "0%", marginTop: "0px", marginLeft: "0px", opacity: 0.25 }} src={`https://picsum.photos/id/${number}/1500/1300`} />
    )
}