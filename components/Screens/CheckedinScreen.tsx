'use client'

// import React from 'react'
// import Navbar2 from './Navbar2'
// // import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/CheckedinScreen/styles.css";
// import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/CheckedinScreen/styles.css";

// function CheckedinScreen() {
  
//   return (
//     <div>
//       <body className= "checkedin-screen">
//       <Navbar2 userRole={'frontdesk'} />
//         CHECKED IN SCREEN
  
//       </body>
//     </div>
//   );
// }

// export default CheckedinScreen

// ./components/Screens/CheckedinScreen.tsx

// 'use client'
// import React, { useState } from 'react';
// import Navbar2 from './Navbar2';
// import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/CheckedinScreen/styles.css";

// const CheckedinScreen = () => {
//   const [checkedInGuests, setCheckedInGuests] = useState([
//     {
//       brnId: '123',
//       primaryGuestName: 'John Doe',
//       bookingDate: '2024-01-08',
//       checkinDate: '2024-01-10',
//       checkoutDate: '2024-01-15',
//       numberOfRooms: 2,
//       roomNames: ['101', '102'],
//     },
//   ]);

//   const handleCheckout = (brnId) => {
//     // Implement checkout logic here
//     // For example, update the state or make an API call
//     console.log(`Checking out BRN ID ${brnId}`);
//   };

//   return (
//     <div>
//       <body className="checkedin-screen">
//         <Navbar2 userRole={'frontdesk'} />

//         <table>
//           <thead>
//             <tr>
//               <th>BRN ID</th>
//               <th>Primary Guest Name</th>
//               <th>Booking Date</th>
//               <th>Check-in Date</th>
//               <th>Check-out Date</th>
//               <th>Number of Rooms</th>
//               <th>Room Names</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {checkedInGuests.map((guest) => (
//               <tr key={guest.brnId}>
//                 <td>{guest.brnId}</td>
//                 <td>{guest.primaryGuestName}</td>
//                 <td>{guest.bookingDate}</td>
//                 <td>{guest.checkinDate}</td>
//                 <td>{guest.checkoutDate}</td>
//                 <td>{guest.numberOfRooms}</td>
//                 <td>{guest.roomNames.join(', ')}</td>
//                 <td>
//                 <button
//                     onClick={() => handleCheckout(guest.brnId)}
//                     className="checkout-button"
//                   >
//                     Check-out
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </body>
//     </div>
//   );
// };

// export default CheckedinScreen;

// CheckedinScreen.js
import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/CheckedinScreen/styles.css";

const CheckedinScreen = () => {
  const [checkedInGuests, setCheckedInGuests] = useState([
    {
      brnId: '123',
      primaryGuestName: 'John Doe',
      bookingDate: '2024-01-08',
      checkinDate: '2024-01-10',
      checkoutDate: '2024-01-15',
      numberOfRooms: 2,
      roomNames: ['101', '102'],
    },
  ]);

  const handleCheckout = (brnId) => {
    // Implement checkout logic here
    // For example, update the state or make an API call
    console.log(`Checking out BRN ID ${brnId}`);
  };

  return (
    <div>
      <body className="checkedin-screen">

      <Navbar2 userRole={'frontdesk'} />

      <table className="table">
        <thead>
          <tr>
            <th>BRN ID</th>
            <th>Primary Guest Name</th>
            <th>Booking Date</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number of Rooms</th>
            <th>Room Names</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {checkedInGuests.map((guest) => (
            <tr key={guest.brnId}>
              <td>{guest.brnId}</td>
              <td>{guest.primaryGuestName}</td>
              <td>{guest.bookingDate}</td>
              <td>{guest.checkinDate}</td>
              <td>{guest.checkoutDate}</td>
              <td>{guest.numberOfRooms}</td>
              <td>{guest.roomNames.join(', ')}</td>
              <td>
                <button
                  onClick={() => handleCheckout(guest.brnId)}
                  className="checkout-button"
                >
                  Check-out
                </button>
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
