import React, { useState, useEffect } from 'react';
import ShowVideo from '../ShowVideo';
import ShowStocks from '../ShowStocks';
import './style.css';

export default function RandomImage() {
    const [actionNumber, changeNumber] = useState('');

    // const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
    const imageWidth = 220; //your desired image width in pixels
    const imageHeight = 210; //desired image height in pixels
    const collectionID = 1163637; //the collection ID from the original url

    function renderGalleryItem() {
        var pictureNumber = Math.floor((Math.random() * 999) + 1);
        var url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${pictureNumber}`
        return url;
    }
    var interval = Math.floor((Math.random() * 20) + 1) * 1000
    useEffect(
        () => {
            setInterval(() => {
                const actionNumber = Math.floor((Math.random() * 6) + 1);
                changeNumber(actionNumber)
            }, interval);
        }
    );

    var content = [];
    console.log("action number: ", actionNumber);
    if (actionNumber === 6) {
        let url = renderGalleryItem();
        content.push(<img src={url}></img>)
    }
    else {
        switch (actionNumber){
            case 1:
                content.push(<ShowStocks />);
                break;
            // case 2:
            //     content.push(<ShowVideo />);
            //     break;
            // default:
            //     content.push("witam");

        }

    }
    console.log("tutaj: ", content);

    return (
        <div className="content">
            {content}
        </div>
    );
}

