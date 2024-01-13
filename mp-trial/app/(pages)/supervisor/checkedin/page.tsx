import React from 'react'
import CheckedinScreen from '@/components/Screens/CheckedinScreen'
import Navbar2 from '@/components/Screens/Navbar2'


function page() {
  return (
    <div>
    <Navbar2 userRole={'supervisor'} />
    <CheckedinScreen />
    </div>
   
  )
}

export default page