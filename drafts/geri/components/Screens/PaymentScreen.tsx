import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link'
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/PaymentScreen/styles.css";

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