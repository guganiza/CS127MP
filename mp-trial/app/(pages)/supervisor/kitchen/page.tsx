import KitchenScreen from '@/components/Screens/KitchenScreen'
import Navbar2 from '@/components/Screens/Navbar2'
import React from 'react'

function page() {
  return (
    <div>
    <Navbar2 userRole={'supervisor'} />
    <KitchenScreen />
    </div>
  )
}

export default page