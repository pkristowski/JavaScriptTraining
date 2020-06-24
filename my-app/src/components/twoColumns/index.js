import React from 'react'
import './style.css';

export default function TwoColumns(props){
    return (
        <div class="row">
            <div class="column" style={{float: "right"}}>
                {props.children[0]}
            </div>
            <div class="column" style={{float: "left"}}>
                {props.children[1]}
            </div>
        </div>
    )
};