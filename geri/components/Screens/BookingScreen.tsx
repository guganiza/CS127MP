import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link';
//import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/BookingScreen/styles.css";

function BookingScreen() {
  
  return (
    <div>
      <body className= "booking-screen">
      <Navbar2 userRole={'frontdesk'} />
        BOOKINGS SCREEN
        <br></br><br></br>
        <h1> INSERT TABLE OF GUESTS NA DI PA CHECKED IN</h1>
        <br></br><br></br>
        <Link href="/payment">CHECKOUT</Link>
      </body>
    </div>
  );
}

export default BookingScreen
