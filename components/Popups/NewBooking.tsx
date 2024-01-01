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


import React, { useState } from 'react';
import Modal from 'react-modal';

const GuestForm = ({ guest, onChange }) => {
  return (
    <div>
      <label>Name:</label>
      <input type="text" value={guest.name} onChange={(e) => onChange({ ...guest, name: e.target.value })} />

      <label>Birthday:</label>
      <input type="date" value={guest.birthday} onChange={(e) => onChange({ ...guest, birthday: e.target.value })} />

      <label>Contact Number:</label>
      <input
        type="text"
        value={guest.contactNumber}
        onChange={(e) => onChange({ ...guest, contactNumber: e.target.value })}
      />

      <label>Email Address:</label>
      <input
        type="email"
        value={guest.emailAddress}
        onChange={(e) => onChange({ ...guest, emailAddress: e.target.value })}
      />
    </div>
  );
};

const BookingForm = () => {
  const [primaryGuest, setPrimaryGuest] = useState({
    name: '',
    birthday: '',
    contactNumber: '',
    emailAddress: '',
  });

  const [additionalGuests, setAdditionalGuests] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [bookingDetails, setBookingDetails] = useState({
    bookingDate: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: 'Deluxe',
    numberOfRooms: 1,
    roomNumber: '',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddGuest = () => {
    setAdditionalGuests([...additionalGuests, { name: '', birthday: '', contactNumber: '', emailAddress: '' }]);
  };

  const handleGuestChange = (index, guest) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index] = guest;
    setAdditionalGuests(updatedGuests);
  };

  const handleBookingDateChange = (e) => {
    setBookingDetails({ ...bookingDetails, bookingDate: e.target.value });
  };

  const handleCheckInDateChange = (e) => {
    setBookingDetails({ ...bookingDetails, checkInDate: e.target.value });
  };

  const handleCheckOutDateChange = (e) => {
    setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value });
  };

  const handleRoomTypeChange = (e) => {
    setBookingDetails({ ...bookingDetails, roomType: e.target.value });
  };

  const handleNumberOfRoomsChange = (e) => {
    setBookingDetails({ ...bookingDetails, numberOfRooms: parseInt(e.target.value, 10) });
  };

  const handleRoomNumberChange = (e) => {
    setBookingDetails({ ...bookingDetails, roomNumber: e.target.value });
  };

  const handleProceed = () => {
    console.log('Booking details:', { primaryGuest, additionalGuests, bookingDetails });
    // Add your logic for handling the booking submission here
  };

  return (
    <div>
      <h1>Primary Guest</h1>

      {/* Primary Guest Form */}
      <GuestForm guest={primaryGuest} onChange={setPrimaryGuest} />

      <hr /> {/* Separation line between primary and additional guests */}

      <h1>Additional Guests</h1>
      {/* Additional Guests Form */}
      {additionalGuests.map((guest, index) => (
        <GuestForm key={index} guest={guest} onChange={(updatedGuest) => handleGuestChange(index, updatedGuest)} />
      ))}
      <button onClick={handleAddGuest}>Add Other Guests</button>

      {/* Modal for Additional Guests */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {additionalGuests.map((guest, index) => (
          <GuestForm key={index} guest={guest} onChange={(updatedGuest) => handleGuestChange(index, updatedGuest)} />
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>

      {/* Booking Details */}
      <div>
        <label>Booking Date:</label>
        <input type="date" value={bookingDetails.bookingDate} onChange={handleBookingDateChange} />

        <label>Check-in Date:</label>
        <input type="date" value={bookingDetails.checkInDate} onChange={handleCheckInDateChange} />

        <label>Check-out Date:</label>
        <input type="date" value={bookingDetails.checkOutDate} onChange={handleCheckOutDateChange} />

        <label>Room Type:</label>
        <select value={bookingDetails.roomType} onChange={handleRoomTypeChange}>
          <option value="Deluxe">Deluxe</option>
          <option value="Twin">Twin</option>
          <option value="Suite">Suite</option>
        </select>

        <label>Number of Rooms:</label>
        <input type="number" value={bookingDetails.numberOfRooms} onChange={handleNumberOfRoomsChange} />

        <label>Room Number:</label>
        <input type="text" value={bookingDetails.roomNumber} onChange={handleRoomNumberChange} />
      </div>

      {/* Proceed Button */}
      <button onClick={handleProceed}>Proceed</button>
    </div>
  );
};

export default BookingForm;

