'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar2 from './Navbar2';
import '../../app/css/CheckedinScreen/styles.css';

const CheckedinScreen = () => {
  const router = useRouter();
  const [checkedInGuests, setCheckedInGuests] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchCheckedInGuests();
  }, []);

  const fetchCheckedInGuests = () => {
    // Assuming the endpoint is correct, modify it if needed
    fetch(`http://localhost:8080/myapp/brn/all`)
      .then((response) => response.json())
      .then((data) => {
        setCheckedInGuests(data);
        console.log('Checked-in Guests:', data);
      })
      .catch((error) => console.error('Error fetching checked-in guests:', error));
  };

  const handleCheckout = (BRNCODE, status) => {
    if (status === 'BOOKING') {
      // Implement check-in logic here
      console.log(`Checking in BRN code ${BRNCODE}`);
      // Make a PUT request to change the status
      fetch(`http://localhost:8080/myapp/brn/changestatusCODE?BRNCODE=${BRNCODE}&status=CHECKEDIN`, {
        method: 'PUT',
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response after changing the status if needed
          console.log('Status changed to CHECKEDIN:', data);
          window.location.reload();
        })
        .catch((error) => console.error('Error changing status:', error));
    } else if (status === 'CHECKEDIN') {
      // Implement check-out logic here
      router.push(`/payment?brncode=${BRNCODE}`);
      
    }
  };
  

  return (
    <div>
      <body className="checkedin-screen">

      <Navbar2 userRole={'frontdesk'} />

      <table className="table">
        <thead>
          <tr>
            <th>BRN code</th>
            <th>Primary Guest Name</th>
            <th>Booking Date</th>
            <th>Check in Date</th>
            <th>Check-out Date</th>
            <th>Number of Rooms</th>
            <th>Room Numbers</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {checkedInGuests.map((booking) => (
              <tr key={booking.brncode}>
                <td>{booking.brncode}</td>
                <td>{`${booking.primaryGuest.firstName} ${booking.primaryGuest.lastName}`}</td>
                <td>{booking.booking_date}</td>
                <td>{booking.checkin_date}</td>
                <td>{booking.checkout_date}</td>
                <td>{booking.bookedRooms.length}</td>
                <td>{booking.bookedRooms.map((room) => room.room.roomNumber).join(', ')}</td>
                <td>
                  {booking.status === 'BOOKING' && (
                    <button onClick={() => handleCheckout(booking.brncode, 'BOOKING')} className="checkin-button">
                      Check-in
                    </button>
                  )}
                  {booking.status === 'CHECKEDIN' && (
                    <Link href={`/payment?brncode=${booking.brncode}`} passHref>
                      <button className="checkout-button">
                        Check-out
                      </button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      </body>
    </div>
  );
};

export default CheckedinScreen;
