import React, { useState } from 'react';
import './css/NewBooking.css';

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
    <div className='container'>
      {/* Primary Guest Form */}
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Primary Guest</h2>
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
      <button className='common-button' onClick={handleAddGuest}>Add Other Guests</button>
      <br /><br />

      {/* Booking Details Form */}
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Booking Details</h2>
      <br />
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
      <button className='common-button' onClick={handleFinishBooking}>Finish Booking</button>  
    </div>
  );
};

export default BookingForm;
