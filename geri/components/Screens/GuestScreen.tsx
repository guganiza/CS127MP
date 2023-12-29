import React from 'react'
import Navbar2 from './Navbar2'

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