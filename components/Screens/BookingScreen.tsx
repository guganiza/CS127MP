import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link';
// import "app/css/BookingScreen/styles.css";
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/BookingScreen/styles.css";


function BookingScreen() {
  
  return (
    <div>
      <body className= "booking-screen">
      <Navbar2 userRole={'frontdesk'} />
        BOOKING SCREEN
        <br></br><br></br>
        <h1> INSERT TABLE OF GUESTS</h1>
        <br></br><br></br>
        <Link href="/guests">GUEST1</Link>
        <br></br><br></br>
        <Link href="/payment">CHECKOUT</Link>
      </body>
    </div>
  );
}

export default BookingScreen

