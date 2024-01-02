import React from 'react'
// import "app/css/Popup/styles.css"; // Import the CSS file for styling
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Popup/styles.css";

function Popup(props){
    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>BACK</button>
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Popup

