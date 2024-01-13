import React from 'react'
import Navbar2 from '@/components/Screens/Navbar2'
import ConciergeScreen from '@/components/Screens/ConciergeScreen'

function page() {
  return (
    <div>
     <Navbar2 userRole={'supervisor'} />
    <ConciergeScreen />
    </div>
   
  )
}

export default page