import React from 'react'
import './style.css';

export default function TwoColumns(props){
    return (
        <div>
            <div>
                {props.children[0]}
            </div>
            <div>
                {props.children[1]}
            </div>
        </div>
    )
};