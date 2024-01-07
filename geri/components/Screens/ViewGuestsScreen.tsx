import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link'
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/ViewGuestsScreen/styles.css";

function ViewGuestsScreen() {
  return (
    <div>
        <Navbar2 userRole={'frontdesk'} />
        View Guests Screen
        <br></br><br></br>
        INSERT TABLE FOR GUESTS
    </div>
  )
}

export default ViewGuestsScreen