import React from 'react'
import Navbar2 from './Navbar2'
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/CheckedinScreen/styles.css";

function CheckedinScreen() {
  
  return (
    <div>
      <body className= "checkedin-screen">
      <Navbar2 userRole={'frontdesk'} />
        CHECKED IN SCREEN
        <br></br><br></br>
        <h1> INSERT TABLE OF GUESTS</h1>
      </body>
    </div>
  );
}

export default CheckedinScreen
