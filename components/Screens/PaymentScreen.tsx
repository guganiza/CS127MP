import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link'
// import "app/css/PaymentScreen/styles.css";
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/PaymentScreen/styles.css";


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