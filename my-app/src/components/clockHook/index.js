import React, { useState, useEffect } from 'react';

export default function () {
    const [dateString, setDateString] = useState('');

    useEffect(
        () => {
            setInterval(() => {
                const date = new Date();
                setDateString(date.toLocaleDateString())
            }, 1000);
        }
    )
    
    return (
        <div>
            {dateString};
        </div>
    );
}