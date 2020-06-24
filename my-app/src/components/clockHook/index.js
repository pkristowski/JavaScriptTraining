import React, { useState, useEffect } from 'react';

export default function () {
    const [dateString, setDateString] = useState('');

    useEffect(
        () => {
            setInterval(() => {
                const date = new Date();
                setDateString(date.toLocaleTimeString())
            }, 1000);
        }
    )

    return (
        <div style={{border: "1px solid red"}}>
            {dateString};
        </div>
    );
}