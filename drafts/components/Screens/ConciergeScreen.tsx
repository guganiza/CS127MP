import React from 'react'
import Navbar2 from './Navbar2';
// import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/ConciergeScreen/styles.css";
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/ConciergeScreen/styles.css";

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