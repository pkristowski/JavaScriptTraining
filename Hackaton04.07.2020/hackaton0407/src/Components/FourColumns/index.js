import React from 'react'
import './style.css';

export default function FourColumns(props){
    return (
        <div class="row">
            <div class="column" id="column1" style={{float: "left"}}>
                {props.children[0]}
            </div>
            <div class="column" id="column2" style={{float: "left"}}>
                {props.children[1]}
            </div>
            <div class="column" id="column3" style={{float: "left"}}>
                {props.children[2]}
            </div>
            <div class="column" id="column4" style={{float: "right"}}>
                {props.children[3]}
            </div>
        </div>
    )
};