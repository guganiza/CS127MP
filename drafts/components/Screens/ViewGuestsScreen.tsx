'use client'

// import React from 'react'
// import Navbar2 from './Navbar2'
// import Link from 'next/link'
// // import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/ViewGuestsScreen/styles.css";
// import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/ViewGuestsScreen/styles.css";

// function ViewGuestsScreen() {
//   return (
//     <div>
//       <body className='viewguests-screen'>
//       <Navbar2 userRole={'frontdesk'} />
//         View Guests Screen
//         <br></br><br></br>
//       </body>
      
//     </div> 
//   )
// }

// export default ViewGuestsScreen


import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/ViewGuestsScreen/styles.css";


function ViewGuestsScreen() {
  // State to manage BRN ID entered by the user
  const [brnId, setBrnId] = useState('');
  
  // State to manage secondary guests data (replace with actual data)
  const [secondaryGuests, setSecondaryGuests] = useState([]);

  // Function to handle BRN ID input change
  const handleBrnIdChange = (event) => {
    setBrnId(event.target.value);
  };

  // Function to handle fetching secondary guests based on BRN ID (replace with actual API call)
  const fetchSecondaryGuests = () => {
    // Make an API call or fetch data based on the BRN ID
    // Update the secondaryGuests state with the fetched data
    // Example:
    const fetchedData = []; // Replace with actual data
    setSecondaryGuests(fetchedData);
  };

  return (
    <div>
      <body className='viewguests-screen'>
        <Navbar2 userRole={'frontdesk'} />
        <h2>View Guests Screen</h2>
        <br></br><br></br>
        
        {/* Text field for entering BRN ID */}
        <label htmlFor="brnId">Enter BRN ID: </label>
        <input type="text" id="brnId" value={brnId} onChange={handleBrnIdChange} />
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
            {secondaryGuests.map((guest, index) => (
              <tr key={index}>
                <td>{guest.name}</td>
                <td>{guest.birthday}</td>
                <td>{guest.age}</td>
                <td>{guest.address}</td>
                <td>{guest.contactNumber}</td>
                <td>{guest.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default ViewGuestsScreen;
