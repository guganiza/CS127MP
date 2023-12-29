import React from 'react'
import Navbar2 from './Navbar2'
import Link from 'next/link';
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/BookingScreen/styles.css";

function BookingScreen() {
  
  return (
    <div>
      <main>
        <Navbar2 userRole={'frontdesk'} />
        BOOKING SCREEN
        <br></br><br></br>
        <h1> INSERT TABLE OF GUESTS</h1>
        <br></br><br></br>
        <Link href="/guests">GUEST1</Link>
        <br></br><br></br>
        <Link href="/payment">CHECKOUT</Link>
      </main>
    </div>
  );
}

export default BookingScreen