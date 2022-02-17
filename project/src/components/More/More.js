import React from 'react'
import './More.css';
  
function More(props) {
    return (
        <div>
            <button type="button" className="button-more" onClick={(event) => {props.handleMore('hot')}}>+ Ver mais</button>
        </div>
    )
}

export default More