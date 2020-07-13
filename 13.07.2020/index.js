import React, { useState, useEffect } from 'react';

export default function Images() {

    const [images, setImages] = useState([]);
    fetch("https://picsum.photos/v2/list?page=2&limit=100")
        .then((resp) => resp.json())
        .then((data) => {
            setImages(data);
        });
}

useEffect(() => {
    getImages();
}, [])

return (
    <div>
        {images.map((image) => (
            <img style={{ width: '20%', height: '100px' }} scr={image.download_url} />
        ))}

        <button>Download more</button>
    </div>
)