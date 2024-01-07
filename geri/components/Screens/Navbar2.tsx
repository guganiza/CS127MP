'use client'
import Link from 'next/link';
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/Navbar2/styles.css"; // Import the CSS file for styling
import React from 'react'
import Popup from './Popup'
import { useState } from 'react'
import ContactScreen from './ContactScreen';
import NewBooking from '../Popups/NewBooking';
import Search from '../Popups/Search';
import AddCharge from '../Popups/AddCharge';

function Navbar({ userRole }: { userRole: string }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const [bookingPopup, setBookingPopup] = useState(false);

  const openSearchPopup = () => {
    setSearchPopup(true);
  };

  const openBookingPopup = () => {
    setBookingPopup(true);
  };

  const closeSearchPopup = () => {
    setSearchPopup(false);
  };

  const closeBookingPopup = () => {
    setBookingPopup(false);
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <img src="https://cdn.discordapp.com/attachments/775346740122484750/1190136677210005524/image.png?ex=65a0b427&is=658e3f27&hm=c7e133280dbe77345c075324008c379963bd31eb7e1d647ec392fec7125650d9&" alt="Your Brand Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-links">
      
        {userRole === 'frontdesk' && (
            <>
            <li>
            <Link href="/checkedin">Checked-in Guests</Link>
            </li>
            <li>
            <Link href="/viewguests">View Guests</Link>
            </li>
            <li>
            <Link href="/bookings">Bookings</Link>
            </li>
            <li>
            <button onClick={openSearchPopup}>Search</button>
            {searchPopup && (
              <Popup trigger={searchPopup} setTrigger={closeSearchPopup}>
              <Search />
              </Popup>
            )}
        </li>
        <li>
            <button onClick={openBookingPopup}>New Booking</button>
            {bookingPopup && (
              <Popup trigger={bookingPopup} setTrigger={closeBookingPopup}>
              {/* <h3 className='text'>PRIMARY GUEST</h3>
              <p>INSERT FORMS</p>
              <p>Name:</p>
              <p>Birthday:</p>
              <p>Age: </p>
              <p>Contact number:</p>
              <p>Email address:</p>
              <button className='button2' onClick={() => setBookingPopup(true)}>Add other guests</button> */}
              <NewBooking />
              </Popup>
            )}
        </li></>
        )}

        {['kitchen', 'concierge', 'housekeeping'].includes(userRole) && (
        <li>
          <button onClick={() => setButtonPopup(true)}>Add Charge</button>
            {buttonPopup && (
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              {/* <h3 className='text'>Add Charge</h3>
              <p>Room ID / BRN: dropdown</p>
              <p>*insert table of services</p>
              <p>*total bill*</p>
              <p>*add button to add more rows*</p>
              <button className='button2' onClick={() => setButtonPopup(true)}>FINISH CHARGING</button> */}
              <AddCharge />
              </Popup>
            )}
        </li>
        )}

        {userRole === 'supervisor' && (
            <><li>
                <Link href="/supervisor">Supervisor</Link>
            </li>
            <li>
                <Link href="/checkedin">Frontdesk</Link>
            </li>
            <li>
                <Link href="/housekeeping">Housekeeping</Link>
            </li>
            <li>
                <Link href="/kitchen">Kitchen</Link>
            </li>
            <li>
                <Link href="/concierge">Concierge</Link>
            </li></>
        )}

        <li>
          <Link href="/">Logout</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;