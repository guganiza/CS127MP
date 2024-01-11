'use client'

import React from 'react'
import Navbar2 from './Navbar2';
import Popup from './Popup'
import { useState } from 'react'
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/SupervisorScreen/styles.css";
import '../../app/css/SupervisorScreen/styles.css';

function SupervisorScreen() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <body className='supervisor'>
      <Navbar2 userRole={'supervisor'} />
      PAYROLL
    <br></br><br></br>
    ENTER EMPLOYEE ID: (textbox)
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