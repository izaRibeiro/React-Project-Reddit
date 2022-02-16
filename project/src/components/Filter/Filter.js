import React from 'react'
import './Filter.css';
  
function Filter(props) {
    return (
        <div id="filter-container">
            <button type="button" className="button">Hot</button>
            <button type="button" className="button">News</button>
            <button type="button" className="button">Rising</button>
        </div>
    )
}

export default Filter