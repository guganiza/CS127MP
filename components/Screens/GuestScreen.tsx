import React from 'react'
import Navbar2 from './Navbar2'
// import "app/css/GuestScreen/styles.css";
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/GuestScreen/styles.css";

function GuestScreen() {
  return (
    <div>
        <Navbar2 userRole={'frontdesk'} />
        <br></br><br></br>
        Guest Screen
        <p>dapat dynamic pagkuha sa guest id and pag display sa guests under primary guest</p>
    </div>
  )
}

export default GuestScreen