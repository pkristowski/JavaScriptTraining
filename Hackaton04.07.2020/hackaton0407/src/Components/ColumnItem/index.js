import React from 'react'
import './style.css';

export default function ColumnItem(props) {

    console.log("ilosc ", React.Children.toArray(props.children).length);
    var length = React.Children.toArray(props.children).length;

    const content = [];

    for(var i = 0; i < length; i++){
        content.push(<div className="column">{props.children[i]}</div>)
    }

    console.log(content);

    return (

        <div className="single-column-grid">
            {content}
        </div>
    )
};