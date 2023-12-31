'use client'

import React from 'react'
import Navbar2 from './Navbar2';
import Popup from './Popup'
import { useState } from 'react'
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/SupervisorScreen/styles.css"; 
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/SupervisorScreen/styles.css";

function SupervisorScreen() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <body className='supervisor'>
      <Navbar2 userRole={'supervisor'} />
    SUPERVISOR SCREEN
    <br></br><br></br>
    INSERT TABLE OF EMPLOYEES AND THEIR PAYROLL + RELEASE PAYMENT BUTTON
    <br></br><br></br>
    <button className='button2' onClick={() => setButtonPopup(true)}>EMPLOYEE1</button>
      {buttonPopup && (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className='text'>Salary</h3>
        <p>Employee ID: (insert kung ano value clicked)</p>
        <p>Salary: (user input text box)</p>
        <br></br>
        <button className='button2' onClick={() => setButtonPopup(true)}>UPDATE SALARY</button>
        </Popup>
        )}
      </body>
   
    </div>
  )
}

export default SupervisorScreen