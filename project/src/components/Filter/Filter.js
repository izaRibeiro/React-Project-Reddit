import React from 'react'
import './Filter.css';
  
function Filter(props) {
    return (
        <div id="filter-container">
            <button className="button" onClick={(event) => {props.handleClick('hot')}}>Hot</button>
            <button className="button" onClick={(event) => {props.handleClick('new')}}>News</button>
            <button className="button"onClick={(event) => {props.handleClick('top')}}>Rising</button>
        </div>
    )
}

export default Filter