import React from 'react'
import Navbar2 from './Navbar2'
// import "app/css/HousekeepingScreen/styles.css"
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/HousekeepingScreen/styles.css";

function HousekeepingScreen() {
  return (
    <div>
      <Navbar2 userRole={'housekeeping'} />
      HOUSEKEEPING SCREEN
      <br></br><br></br>
      INSERT TABLE OF SERVICES AVAILED ARRANGED BY BRN
    </div>
  )
}

export default HousekeepingScreen