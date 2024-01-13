import HousekeepingScreen from '@/components/Screens/HousekeepingScreen'
import Navbar2 from '@/components/Screens/Navbar2'
import React from 'react'

function page() {
  return (
    <div>
    <Navbar2 userRole={'supervisor'} />
    <HousekeepingScreen />
    </div>
  

  )
}

export default page