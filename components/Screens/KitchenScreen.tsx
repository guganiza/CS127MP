import React from 'react'
import Navbar2 from './Navbar2';
// import "app/css/KitchenScreen/styles.css";
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/KitchenScreen/styles.css";


function KitchenScreen() {
  return (
    <div>
      <body className='kitchen'>
      <Navbar2 userRole={'kitchen'} />
      KITCHEN SCREEN
      <br></br><br></br>
      INSERT TABLE OF SERVICES AVAILED ARRANGED BY BRN
      </body>
    </div>
  )
}

export default KitchenScreen