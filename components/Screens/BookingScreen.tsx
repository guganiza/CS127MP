'use client'

// import React from 'react'
// import Navbar2 from './Navbar2'
// import Link from 'next/link';
// //import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/BookingScreen/styles.css";
// import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/BookingScreen/styles.css";

// function BookingScreen() {
  
//   return (
//     <div>
//       <body className= "booking-screen">
//       <Navbar2 userRole={'frontdesk'} />
//         BOOKINGS SCREEN
       



//       </body>
//     </div>
//   );
// }

// export default BookingScreen
       
        {/* <Link href="/payment">CHECKOUT</Link> */}


// ./components/Screens/BookingScreen.tsx



import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import Link from 'next/link';
// import './BookingScreen/styles.css';
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/BookingScreen/styles.css";

function BookingScreen() {
  const [bookings, setBookings] = useState([
    {
      brnId: '456',
      primaryGuestName: 'Jane Doe',
      bookingDate: '2024-01-15',
      checkinDate: null,
      checkoutDate: null,
      numberOfRooms: 1,
      roomNames: ['201'],
    },
  ]);

  const handleCheckin = (brnId) => {
    // Implement check-in logic here
    // For example, update the state or make an API call
    console.log(`Checking in BRN ID ${brnId}`);
  };

  const handleCancel = (brnId) => {
    // Implement cancel booking logic here
    // For example, update the state or make an API call
    console.log(`Canceling booking BRN ID ${brnId}`);
  };

  return (
    <div>
      <body className="booking-screen">
        <Navbar2 userRole={'frontdesk'} />
        <h2>BOOKINGS SCREEN</h2>

        <table>
          <thead>
            <tr>
              <th>BRN ID</th>
              <th>Primary Guest Name</th>
              <th>Booking Date</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Number of Rooms</th>
              <th>Room Names</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.brnId}>
                <td>{booking.brnId}</td>
                <td>{booking.primaryGuestName}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.checkinDate || 'Not checked in'}</td>
                <td>{booking.checkoutDate || 'Not checked out'}</td>
                <td>{booking.numberOfRooms}</td>
                <td>{booking.roomNames.join(', ')}</td>
                <td>
                  <button
                    onClick={() => handleCheckin(booking.brnId)}
                    className="checkin-button"
                  >
                    Check-in
                  </button>
                  <button
                    onClick={() => handleCancel(booking.brnId)}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default BookingScreen;
