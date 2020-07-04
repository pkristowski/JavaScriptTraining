import React from 'react';

export default function RandomImage({ pictureNumber }) {

   // const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
    const imageWidth = 480; //your desired image width in pixels
    const imageHeight = 480; //desired image height in pixels
    const collectionID = 1163637; //the collection ID from the original url

    function renderGalleryItem() {
        var url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${pictureNumber}`;
            return url;
    }

    var image = renderGalleryItem();
    console.log("tutaj: ",image);

    return (
        <div className="image">
            <img src={image}></img>
        </div>
    );
}

