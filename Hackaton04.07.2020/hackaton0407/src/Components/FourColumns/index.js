import React from 'react'
import './style.css';

export default function FourColumns(props){
    return (
        <div className="row">
            <div className="column" id="column1" style={{float: "left"}}>
                {props.children[0]}
            </div>
            <div className="column" id="column2" style={{float: "left"}}>
                {props.children[1]}
            </div>
            <div className="column" id="column3" style={{float: "left"}}>
                {props.children[2]}
            </div>
            <div className="column" id="column4" style={{float: "right"}}>
                {props.children[3]}
            </div>
        </div>
    )
};