'use client'

import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import '../../app/css/ViewGuestsScreen/styles.css';


function ViewGuestsScreen() {
  // State to manage BRN ID entered by the user
  const [brnCode, setBrnCode] = useState('');
  
  // State to manage secondary guests data (replace with actual data)
  const [secondaryGuests, setSecondaryGuests] = useState([]);

  // Function to handle BRN ID input change
  const handleBrnCodeChange = (event) => {
    setBrnCode(event.target.value);
  };

  // Function to handle fetching secondary guests based on BRN ID (replace with actual API call)
  const fetchSecondaryGuests = () => {
    fetch(`http://localhost:8080/myapp/brn/secondaryguestsBRNCODE?BRNCODE=${brnCode}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if data is an array and not empty
      if (Array.isArray(data) && data.length > 0) {
        setSecondaryGuests(data);
      } else {
        setSecondaryGuests([]);
      }
      console.log('API Response:', data);
      console.log('Secondary guests:', secondaryGuests);
    })
    .catch((error) => console.error('Error fetching employee data:', error));
  };

  return (
    <div>
      <body className='viewguests-screen'>
        <Navbar2 userRole={'frontdesk'} />
        <h2>View Guests Screen</h2>
        <br></br><br></br>
        
        {/* Text field for entering BRN ID */}
        <label htmlFor="brnCode">Enter BRN code: </label>
        <input type="text" id="brnCode" value={brnCode} onChange={handleBrnCodeChange} />
        <button onClick={fetchSecondaryGuests} className='get-other-button'>Get Other Guests</button>

        {/* Table to display secondary guests */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birthday</th>
              <th>Age</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email address</th>
            </tr>
          </thead>
          <tbody>
            {secondaryGuests.map((brn) => (
              <tr key={brn.sguest_ID}>
                <td>{brn.firstName + brn.lastName}</td>
                <td>{brn.birthday}</td>
                <td>{brn.age}</td>
                <td>{brn.address}</td>
                <td>{brn.contactNumber}</td>
                <td>{brn.emailAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default ViewGuestsScreen;
