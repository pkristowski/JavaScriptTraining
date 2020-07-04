import React from 'react';

export default function RandomImage() {

    //const numItemsToGenerate = 20; //how many gallery items you want on the screen
    const imageWidth = 480; //your desired image width in pixels
    const imageHeight = 480; //desired image height in pixels
    const collectionID = 1163637; //the collection ID from the original url

    var galleryItem;

    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`).then((response) => {
        

    }
    // return (
    //     <img src={galleryItem} />
    // )

    // for (let i = 0; i < numItemsToGenerate; i++) {
    //     renderGalleryItem();
    // }
}