import React from 'react';

export default function RandomImage() {
    const numItemsToGenerate = 10; //how many gallery items you want on the screen
    const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
    const imageWidth = 480; //your desired image width in pixels
    const imageHeight = 480; //desired image height in pixels
    const collectionID = 1163637; //the collection ID from the original url


    function renderGalleryItem(randomNumber) {
        console.log(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`);
        fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    renderGalleryItem(123);

    return null;
}

