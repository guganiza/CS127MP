// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const GuestForm = ({ guest, onChange }) => {
//   return (
//     <div>
//       <label>Name:</label>
//       <input type="text" value={guest.name} onChange={(e) => onChange({ ...guest, name: e.target.value })} />

//       <label>Birthday:</label>
//       <input type="date" value={guest.birthday} onChange={(e) => onChange({ ...guest, birthday: e.target.value })} />

//       <label>Contact Number:</label>
//       <input
//         type="text"
//         value={guest.contactNumber}
//         onChange={(e) => onChange({ ...guest, contactNumber: e.target.value })}
//       />

//       <label>Email Address:</label>
//       <input
//         type="email"
//         value={guest.emailAddress}
//         onChange={(e) => onChange({ ...guest, emailAddress: e.target.value })}
//       />
//     </div>
//   );
// };

// const BookingForm = () => {
//   const [primaryGuest, setPrimaryGuest] = useState({
//     name: '',
//     birthday: '',
//     contactNumber: '',
//     emailAddress: '',
//   });

//   const [additionalGuests, setAdditionalGuests] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const [bookingDetails, setBookingDetails] = useState({
//     bookingDate: '',
//     checkInDate: '',
//     checkOutDate: '',
//     roomType: 'Deluxe',
//     numberOfRooms: 1,
//     roomNumber: '',
//   });

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleAddGuest = () => {
//     setAdditionalGuests([...additionalGuests, { name: '', birthday: '', contactNumber: '', emailAddress: '' }]);
//   };

//   const handleGuestChange = (index, guest) => {
//     const updatedGuests = [...additionalGuests];
//     updatedGuests[index] = guest;
//     setAdditionalGuests(updatedGuests);
//   };

//   const handleBookingDateChange = (e) => {
//     setBookingDetails({ ...bookingDetails, bookingDate: e.target.value });
//   };

//   const handleCheckInDateChange = (e) => {
//     setBookingDetails({ ...bookingDetails, checkInDate: e.target.value });
//   };

//   const handleCheckOutDateChange = (e) => {
//     setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value });
//   };

//   const handleRoomTypeChange = (e) => {
//     setBookingDetails({ ...bookingDetails, roomType: e.target.value });
//   };

//   const handleNumberOfRoomsChange = (e) => {
//     setBookingDetails({ ...bookingDetails, numberOfRooms: parseInt(e.target.value, 10) });
//   };

//   const handleRoomNumberChange = (e) => {
//     setBookingDetails({ ...bookingDetails, roomNumber: e.target.value });
//   };

//   const handleProceed = () => {
//     console.log('Booking details:', { primaryGuest, additionalGuests, bookingDetails });
//     // Add your logic for handling the booking submission here
//   };

//   return (
//     <div>
//       <h1>Primary Guest</h1>

//       {/* Primary Guest Form */}
//       <GuestForm guest={primaryGuest} onChange={setPrimaryGuest} />

//       {/* Additional Guests Form */}
//       {additionalGuests.map((guest, index) => (
//         <GuestForm key={index} guest={guest} onChange={(updatedGuest) => handleGuestChange(index, updatedGuest)} />
//       ))}
//       <button onClick={handleAddGuest}>Add Other Guests</button>

//       {/* Modal for Additional Guests */}
//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         {additionalGuests.map((guest, index) => (
//           <GuestForm key={index} guest={guest} onChange={(updatedGuest) => handleGuestChange(index, updatedGuest)} />
//         ))}
//         <button onClick={closeModal}>Close</button>
//       </Modal>

//       {/* Booking Details */}
//       <div>
//         <label>Booking Date:</label>
//         <input type="date" value={bookingDetails.bookingDate} onChange={handleBookingDateChange} />

//         <label>Check-in Date:</label>
//         <input type="date" value={bookingDetails.checkInDate} onChange={handleCheckInDateChange} />

//         <label>Check-out Date:</label>
//         <input type="date" value={bookingDetails.checkOutDate} onChange={handleCheckOutDateChange} />

//         <label>Room Type:</label>
//         <select value={bookingDetails.roomType} onChange={handleRoomTypeChange}>
//           <option value="Deluxe">Deluxe</option>
//           <option value="Twin">Twin</option>
//           <option value="Suite">Suite</option>
//         </select>

//         <label>Number of Rooms:</label>
//         <input type="number" value={bookingDetails.numberOfRooms} onChange={handleNumberOfRoomsChange} />

//         <label>Room Number:</label>
//         <input type="text" value={bookingDetails.roomNumber} onChange={handleRoomNumberChange} />
//       </div>

//       {/* Proceed Button */}
//       <button onClick={handleProceed}>Proceed</button>
//     </div>
//   );
// };

// export default BookingForm;


// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const GuestForm = ({ guest, onChange }) => {
//   return (
//     <div>
//       <label>Name:</label>
//       <input type="text" value={guest.name} onChange={(e) => onChange({ ...guest, name: e.target.value })} />

//       <label>Birthday:</label>
//       <input type="date" value={guest.birthday} onChange={(e) => onChange({ ...guest, birthday: e.target.value })} />

//       <label>Contact Number:</label>
//       <input
//         type="text"
//         value={guest.contactNumber}
//         onChange={(e) => onChange({ ...guest, contactNumber: e.target.value })}
//       />

//       <label>Email Address:</label>
//       <input
//         type="email"
//         value={guest.emailAddress}
//         onChange={(e) => onChange({ ...guest, emailAddress: e.target.value })}
//       />
//     </div>
//   );
// };

// const BookingForm = () => {
//   const [primaryGuest, setPrimaryGuest] = useState({
//     name: '',
//     birthday: '',
//     contactNumber: '',
//     emailAddress: '',
//   });

//   const [additionalGuests, setAdditionalGuests] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const [bookingDetails, setBookingDetails] = useState({
//     bookingDate: '',
//     checkInDate: '',
//     checkOutDate: '',
//     roomType: 'Deluxe',
//     numberOfRooms: 1,
//     roomNumber: '',
//   });

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleAddGuest = () => {
//     setAdditionalGuests([...additionalGuests, { name: '', birthday: '', contactNumber: '', emailAddress: '' }]);
//   };

//   const handleGuestChange = (index, guest) => {
//     const updatedGuests = [...additionalGuests];
//     updatedGuests[index] = guest;
//     setAdditionalGuests(updatedGuests);
//   };

//   const handleBookingDateChange = (e) => {
//     setBookingDetails({ ...bookingDetails, bookingDate: e.target.value });
//   };

//   const handleCheckInDateChange = (e) => {
//     setBookingDetails({ ...bookingDetails, checkInDate: e.target.value });
//   };

//   const handleCheckOutDateChange = (e) => {
//     setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value });
//   };

//   const handleRoomTypeChange = (e) => {
//     setBookingDetails({ ...bookingDetails, roomType: e.target.value });
//   };

//   const handleNumberOfRoomsChange = (e) => {
//     setBookingDetails({ ...bookingDetails, numberOfRooms: parseInt(e.target.value, 10) });
//   };

//   const handleRoomNumberChange = (e) => {
//     setBookingDetails({ ...bookingDetails, roomNumber: e.target.value });
//   };

//   const handleProceed = () => {
//     console.log('Booking details:', { primaryGuest, additionalGuests, bookingDetails });
//     // Add your logic for handling the booking submission here
//   };

//   return (
//     <div>
//       <h1>Primary Guest</h1>

//       {/* Primary Guest Form */}
//       <GuestForm guest={primaryGuest} onChange={setPrimaryGuest} />

//       <hr /> {/* Separation line between primary and additional guests */}

//       <h1>Additional Guests</h1>
//       {/* Additional Guests Form */}
//       {additionalGuests.map((guest, index) => (
//         <GuestForm key={index} guest={guest} onChange={(updatedGuest) => handleGuestChange(index, updatedGuest)} />
//       ))}
//       <button onClick={handleAddGuest}>Add Other Guests</button>

//       {/* Modal for Additional Guests */}
//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         {additionalGuests.map((guest, index) => (
//           <GuestForm key={index} guest={guest} onChange={(updatedGuest) => handleGuestChange(index, updatedGuest)} />
//         ))}
//         <button onClick={closeModal}>Close</button>
//       </Modal>

//       {/* Booking Details */}
//       <div>
//         <label>Booking Date:</label>
//         <input type="date" value={bookingDetails.bookingDate} onChange={handleBookingDateChange} />

//         <label>Check-in Date:</label>
//         <input type="date" value={bookingDetails.checkInDate} onChange={handleCheckInDateChange} />

//         <label>Check-out Date:</label>
//         <input type="date" value={bookingDetails.checkOutDate} onChange={handleCheckOutDateChange} />

//         <label>Room Type:</label>
//         <select value={bookingDetails.roomType} onChange={handleRoomTypeChange}>
//           <option value="Deluxe">Deluxe</option>
//           <option value="Twin">Twin</option>
//           <option value="Suite">Suite</option>
//         </select>

//         <label>Number of Rooms:</label>
//         <input type="number" value={bookingDetails.numberOfRooms} onChange={handleNumberOfRoomsChange} />

//         <label>Room Number:</label>
//         <input type="text" value={bookingDetails.roomNumber} onChange={handleRoomNumberChange} />
//       </div>

//       {/* Proceed Button */}
//       <button onClick={handleProceed}>Proceed</button>
//     </div>
//   );
// };

// export default BookingForm;


// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [primaryGuest, setPrimaryGuest] = useState({
//     name: '',
//     birthday: '',
//     contactNumber: '',
//     emailAddress: '',
//   });

//   const [additionalGuests, setAdditionalGuests] = useState([]);

//   const [bookingDetails, setBookingDetails] = useState({
//     bookingDate: '',
//     checkInDate: '',
//     checkOutDate: '',
//     roomType: '',
//     numberOfRooms: 1,
//     roomNumbers: [],
//   });

//   const handlePrimaryGuestChange = (e) => {
//     setPrimaryGuest({ ...primaryGuest, [e.target.name]: e.target.value });
//   };

//   const handleBookingDetailsChange = (e) => {
//     setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
//   };

//   const handleAddGuest = () => {
//     setAdditionalGuests([...additionalGuests, { name: '', birthday: '', contactNumber: '', emailAddress: '' }]);
//   };

//   const handleAdditionalGuestChange = (index, e) => {
//     const updatedGuests = [...additionalGuests];
//     updatedGuests[index][e.target.name] = e.target.value;
//     setAdditionalGuests(updatedGuests);
//   };

//   const handleRoomNumberChange = (e) => {
//     const roomNumbers = Array.from({ length: bookingDetails.numberOfRooms }, (_, i) => i + 1);
//     setBookingDetails({ ...bookingDetails, roomNumbers });
//   };

//   return (
//     <div>
//       {/* Primary Guest Form */}
//       <h2>Primary Guest</h2>
//       <form>
//         <label>Name:</label>
//         <input type="text" name="name" value={primaryGuest.name} onChange={handlePrimaryGuestChange} required />
//         <label>Birthday:</label>
//         <input type="date" name="birthday" value={primaryGuest.birthday} onChange={handlePrimaryGuestChange} required />
//         <label>Contact Number:</label>
//         <input type="text" name="contactNumber" value={primaryGuest.contactNumber} onChange={handlePrimaryGuestChange} required />
//         <label>Email Address:</label>
//         <input type="email" name="emailAddress" value={primaryGuest.emailAddress} onChange={handlePrimaryGuestChange} required />
//       </form>

//       {/* Additional Guests Form */}
//       <h2>Additional Guests</h2>
//       {additionalGuests.map((guest, index) => (
//         <form key={index}>
//           <label>Name:</label>
//           <input type="text" name="name" value={guest.name} onChange={(e) => handleAdditionalGuestChange(index, e)} required />
//           <label>Birthday:</label>
//           <input type="date" name="birthday" value={guest.birthday} onChange={(e) => handleAdditionalGuestChange(index, e)} required />
//           <label>Contact Number:</label>
//           <input type="text" name="contactNumber" value={guest.contactNumber} onChange={(e) => handleAdditionalGuestChange(index, e)} />
//           <label>Email Address:</label>
//           <input type="email" name="emailAddress" value={guest.emailAddress} onChange={(e) => handleAdditionalGuestChange(index, e)} />
//         </form>
//       ))}
//       <button onClick={handleAddGuest}>Add Other Guests</button>

//       {/* Booking Details Form */}
//       <h2>Booking Details</h2>
//       <form>
//         <label>Booking Date:</label>
//         <input type="date" name="bookingDate" value={bookingDetails.bookingDate} onChange={handleBookingDetailsChange} required />
//         <label>Check-in Date:</label>
//         <input type="date" name="checkInDate" value={bookingDetails.checkInDate} onChange={handleBookingDetailsChange} required />
//         <label>Check-out Date:</label>
//         <input type="date" name="checkOutDate" value={bookingDetails.checkOutDate} onChange={handleBookingDetailsChange} required />
//         <label>Room Type:</label>
//         <select name="roomType" value={bookingDetails.roomType} onChange={handleBookingDetailsChange} required>
//           <option value="">Select Room Type</option>
//           <option value="Deluxe">Deluxe</option>
//           <option value="Twin">Twin</option>
//           <option value="Suite">Suite</option>
//         </select>
//         <label>Number of Rooms:</label>
//         <input type="number" name="numberOfRooms" value={bookingDetails.numberOfRooms} onChange={handleBookingDetailsChange} />
//         <label>Room Numbers:</label>
//         <select multiple name="roomNumbers" onChange={handleRoomNumberChange} value={bookingDetails.roomNumbers}>
//           {bookingDetails.roomNumbers.map((roomNumber) => (
//             <option key={roomNumber} value={roomNumber}>
//               {roomNumber}
//             </option>
//           ))}
//         </select>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;


import React, { useState } from 'react';

const BookingForm = () => {
  const [primaryGuest, setPrimaryGuest] = useState({
    name: '',
    birthday: '',
    contactNumber: '',
    emailAddress: '',
  });

  const [additionalGuests, setAdditionalGuests] = useState([]);

  const [bookingDetails, setBookingDetails] = useState({
    bookingDate: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    numberOfRooms: 1,
    roomNumbers: [],
  });

  const [showAdditionalGuests, setShowAdditionalGuests] = useState(false);

  const handlePrimaryGuestChange = (e) => {
    setPrimaryGuest({ ...primaryGuest, [e.target.name]: e.target.value });
  };

  const handleBookingDetailsChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleAddGuest = () => {
    setShowAdditionalGuests(true);
    setAdditionalGuests([...additionalGuests, { name: '', birthday: '', contactNumber: '', emailAddress: '' }]);
  };

  const handleAdditionalGuestChange = (index, e) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index][e.target.name] = e.target.value;
    setAdditionalGuests(updatedGuests);
  };

  const handleRoomNumberChange = (e) => {
    const roomNumbers = Array.from({ length: bookingDetails.numberOfRooms }, (_, i) => i + 1);
    setBookingDetails({ ...bookingDetails, roomNumbers });
  };

  const handleFinishBooking = () => {
    // Add logic to handle the finishing of booking, e.g., send data to the server
    console.log('Booking finished:', { primaryGuest, additionalGuests, bookingDetails });
    // You can perform additional actions here as needed
    setBookingCompleted(true);
  };

  return (
    <div>
      {/* Primary Guest Form */}
      <h2>Primary Guest</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={primaryGuest.name} onChange={handlePrimaryGuestChange} required />
        <label>Birthday:</label>
        <input type="date" name="birthday" value={primaryGuest.birthday} onChange={handlePrimaryGuestChange} required />
        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={primaryGuest.contactNumber} onChange={handlePrimaryGuestChange} required />
        <label>Email Address:</label>
        <input type="email" name="emailAddress" value={primaryGuest.emailAddress} onChange={handlePrimaryGuestChange} required />
      </form>

      {/* Additional Guests Form */}
      {showAdditionalGuests && (
        <div>
          <h2>Additional Guests</h2>
          {additionalGuests.map((guest, index) => (
            <form key={index}>
              <label>Name:</label>
              <input type="text" name="name" value={guest.name} onChange={(e) => handleAdditionalGuestChange(index, e)} required />
              <label>Birthday:</label>
              <input type="date" name="birthday" value={guest.birthday} onChange={(e) => handleAdditionalGuestChange(index, e)} required />
              <label>Contact Number:</label>
              <input type="text" name="contactNumber" value={guest.contactNumber} onChange={(e) => handleAdditionalGuestChange(index, e)} />
              <label>Email Address:</label>
              <input type="email" name="emailAddress" value={guest.emailAddress} onChange={(e) => handleAdditionalGuestChange(index, e)} />
            </form>
          ))}
        </div>
      )}
      
      {/* "Add Other Guests" Button */}
      <button onClick={handleAddGuest}>Add Other Guests</button>

      {/* Booking Details Form */}
      <h2>Booking Details</h2>
      <form>
        <label>Booking Date:</label>
        <input type="date" name="bookingDate" value={bookingDetails.bookingDate} onChange={handleBookingDetailsChange} required />
        <label>Check-in Date:</label>
        <input type="date" name="checkInDate" value={bookingDetails.checkInDate} onChange={handleBookingDetailsChange} required />
        <label>Check-out Date:</label>
        <input type="date" name="checkOutDate" value={bookingDetails.checkOutDate} onChange={handleBookingDetailsChange} required />
        <label>Room Type:</label>
        <select name="roomType" value={bookingDetails.roomType} onChange={handleBookingDetailsChange} required>
          <option value="">Select Room Type</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Twin">Twin</option>
          <option value="Suite">Suite</option>
        </select>
        <label>Number of Rooms:</label>
        <input type="number" name="numberOfRooms" value={bookingDetails.numberOfRooms} onChange={handleBookingDetailsChange} />
        <label>Room Numbers:</label>
        <select multiple name="roomNumbers" onChange={handleRoomNumberChange} value={bookingDetails.roomNumbers}>
          {bookingDetails.roomNumbers.map((roomNumber) => (
            <option key={roomNumber} value={roomNumber}>
              {roomNumber}
            </option>
          ))}
        </select>
      </form>
      {/* "Finish Booking" Button */}
      <button onClick={handleFinishBooking}>Finish Booking</button>  
    </div>
  );
};

export default BookingForm;
