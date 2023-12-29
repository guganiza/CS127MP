import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link'

function PaymentScreen() {
  return (
    <div>
        <Navbar2 userRole={'frontdesk'} />
        Payment Screen
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        INSERT TABLE FOR CHARGED SERVICES 
        INSERT FORMS FOR PAYMENT DETAILS 
        <br></br><br></br>
        <Link href="/frontdesk">FINISH PAYMENT</Link>
    </div>
  )
}

export default PaymentScreen