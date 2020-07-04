import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.css';


export default function Scroll() {

    const style = {
        height: 30,
        border: "1px solid blue",
        margin: 6,
        padding: 8
    };

    var items = [];

    var url = "https://gnews.io/api/v3/top-news?token=149adc463181f6a4d4a76e94b1bb3719";

    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            let lengthOfData = data.length;
            console.log(data.data.memes);
            for (var x = 0; x < lengthOfData; x++) {
                console.log(data.data);
                items[x] = data.articles[x].title;
            }

        });

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={items}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            {items.map((i, index) => (
                <div style={style} key={index}>
                    {items}
                </div>
            ))}
        </InfiniteScroll>
    )
}

