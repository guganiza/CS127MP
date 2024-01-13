import React from 'react'
import Navbar2 from './Navbar2'
import '../../app/css/HousekeepingScreen/styles.css';

function HousekeepingScreen() {
  return (
    <div>
      <body className='housekeeping'>
      <Navbar2 userRole={'housekeeping'} />
      HOUSEKEEPING SCREEN
      <br></br><br></br>
      INSERT TABLE OF SERVICES AVAILED ARRANGED BY BRN
      </body>
    </div>
  )
}

export default HousekeepingScreen