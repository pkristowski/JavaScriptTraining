import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.css';


export default function Scroll({ items }) {

    console.log("items: ", {items});

    const style = {
        height: 30,
        border: "1px solid blue",
        margin: 6,
        padding: 8
    };
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

