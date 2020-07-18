import React from 'react';

export default function RandomImage() {

    // const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
    const imageWidth = 220; //your desired image width in pixels
    const imageHeight = 210; //desired image height in pixels
    const collectionID = 1163637; //the collection ID from the original url

    var actionNumber = Math.floor((Math.random() * 6) + 1);

    function renderGalleryItem() {
        var pictureNumber = Math.floor((Math.random() * 999) + 1);
        var url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${pictureNumber}`;
        return url;
    }

    var content = "";
    console.log("action number: ", actionNumber);
    if (actionNumber == 6) {
        content = renderGalleryItem();
    }
    else {
        content = "witam";
        
    }
    console.log("tutaj: ", content);

    return (
        <div className="content">
            <img src={content}></img>
        </div>
    );
}

