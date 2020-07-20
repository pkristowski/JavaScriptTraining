import React from 'react'
import './style.css';

export default function ShowVideo() {
    return (

        <div className="video">
            <a href="https://www.youtube.com/embed/tgbNymZ7vqY/">
                <iframe width="220px" height="210px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY/0.jpg">
                </iframe>
            </a>
        </div >
    )
};