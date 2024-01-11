import React from 'react'
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/Popup/styles.css"; // Import the CSS file for styling

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