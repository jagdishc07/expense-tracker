import React from 'react';
import './Card.css';

export default function Card(props) {
    const classes = 'card ' + props.className;  //space very important
    return(
        <div className={classes}>{props.children}</div>
    )
}