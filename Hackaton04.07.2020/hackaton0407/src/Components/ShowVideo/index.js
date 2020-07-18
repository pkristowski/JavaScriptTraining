import React from 'react'
import './style.css';

export default function ShowVideo() {
    return (

        <div className="video">
            {/* <embed
                    src="https://www.youtube.com/embed/J---aiyznGQ?autohide=1"
                    wmode="transparent"
                    type="video/mp4"
                    width="220px" height="210px"
                    allow="encrypted-media; picture-in-picture"
                    allowfullscreen
                    title="Keyboard Cat"
                ></embed> */}
            <a href="https://www.youtube.com/embed/tgbNymZ7vqY/">
                <iframe width="220px" height="210px"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY/0.jpg">
                </iframe>
            </a>
        </div >
    )
};