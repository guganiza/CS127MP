'use client'

import React, { useState, useEffect } from 'react';
import Navbar2 from './Navbar2'
import '../../app/css/HousekeepingScreen/styles.css';

const HousekeepingScreen = () => {
  const [bookingReference, setBookingReference] = useState('');
  const [bookingTable, setBookingTable] = useState([]);

  useEffect(() => {
    // Fetch the BRN code from the database
    fetch('http://localhost:8080/myapp/brn/all')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Use the first BRN code from the response
          setBookingReference(data[0].brncode);
          // Fetch services and update the table based on the BRN code
          fetchServicesAndUpdateTable(data[0].brncode);
          console.log(data);
        }
      })
      .catch((error) => console.error('Error fetching BRN code:', error));
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const fetchServicesAndUpdateTable = (brncode) => {
    // Fetch services with the service type "Concierge" based on the BRN code
    fetch(`http://localhost:8080/myapp/availedService/getByType?BRNCode=${brncode}&serviceType=1`)
      .then((response) => response.json())
      .then((data) => {
        // Clear the table before adding new rows
        setBookingTable(data);
      })
      .catch((error) => console.error('Error fetching Concierge services:', error));
  };

  const updateTotal = () => {
    const total = bookingTable.reduce((acc, row) => acc + parseFloat(row.price), 0);
    return total.toFixed(2);
  };

  const handleBRNChange = (e) => {
    const brn = e.target.value.trim();
    setBookingReference(brn);

    if (brn !== '') {
      // Fetch services and update the table based on the new BRN code
      fetchServicesAndUpdateTable(brn);
    } else {
      // Clear the table if the BRN is empty
      setBookingTable([]);
    }
  };

  return (
    <div>
      <body className="concierge">
        <Navbar2 userRole={'concierge'} />

        <label htmlFor="bookingReference">Booking Reference:</label>
        <input
          type="text"
          id="bookingReference"
          placeholder="Enter BRN"
          value={bookingReference}
          onChange={handleBRNChange}
        />

        <table border="1">
          <thead>
            <tr>
              <th>Services</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookingTable.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{updateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </body>
    </div>
  );
};


export default HousekeepingScreen