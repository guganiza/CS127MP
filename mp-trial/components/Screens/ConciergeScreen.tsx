import React from 'react'
import Navbar2 from './Navbar2';
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/ConciergeScreen/styles.css";
import '../../app/css/ConciergeScreen/styles.css';

function ConciergeScreen() {
  return (
    <div>
      <body className= "concierge">
      <Navbar2 userRole={'concierge'} />
      CONCIERGE SCREEN
      <br></br><br></br>
      INSERT TABLE OF SERVICES AVAILED ARRANGED BY BRN
      </body>
    </div>
  )
}

export default ConciergeScreen