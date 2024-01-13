'use client'

import React from 'react'
import Navbar2 from './Navbar2';
import { useState } from 'react'
import Popup from './Popup'
import UpdateSalary from '../Popups/UpdateSalary';
import '../../app/css/SupervisorScreen/styles.css';

function SupervisorScreen() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedEmployeeID, setSelectedEmployeeID] = useState(null);
    // State to manage employee ID entered by the user
    const [empID, setEmpID] = useState('');
  
    // State to manage employee data (replace with actual data)
    const [employeeDetails, setEmployeeDetails] = useState([]);
  
    // Function to handle employee ID input change
    const handleEmpIDChange = (event) => {
      setEmpID(event.target.value);
    };
    
  
    // Function to handle fetching emp details based on employee ID (replace with actual API call)
    const fetchEmployeeDetails = () => {
      // Make an API call or fetch data based on the employee ID
      // Update the employeeDetails state with the fetched data
      fetch(`http://localhost:8080/myapp/employee/find?emp_id=${empID}`)
      //fetch('http://localhost:8080/myapp/employee/all')
      .then((response) => response.json())
      .then((data) => {
        if (data.employeeID) {
          setEmployeeDetails([data]);
        } else {
          setEmployeeDetails([]);
        }
        console.log('API Response:', data);
        console.log('Employee Details:', employeeDetails);
        console.log(localStorage);

      })
      .catch((error) => console.error('Error fetching employee data:', error));
    };

    const handleButtonClick = (employeeID) => {
      // Perform actions based on the employee ID when the button is clicked
      console.log(`Button clicked for employee ID: ${employeeID}`);
      setSelectedEmployeeID(employeeID);
      setButtonPopup(true);
    };
    

  return (
    <div>
      <body className='supervisor'>
      <Navbar2 userRole={'supervisor'} />
    <br></br><br></br>
        {/* Text field for entering emp ID */}
        <label htmlFor="empID">Employee ID: </label>
        <input type="text" id="empID" value={empID} onChange={handleEmpIDChange} />
        <button onClick={fetchEmployeeDetails} className='enter-button'>Enter</button>

        {/* Table for display*/}
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Employee Type</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employeeDetails.map((employee) => (
              <tr key={employee.employeeID}>
                <td>{employee.first_Name}</td>
                <td>{employee.last_Name}</td>
                <td>{employee.employee_Role.roleName}</td>
                <td>{employee.salary}</td>
                <td>
                <button onClick={() => handleButtonClick(employee.employeeID)}>
                Update Salary
                </button>
                </td>
              </tr>
            ))}
            {buttonPopup && (
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          {/* Your Popup content here */}
          <p>Selected Employee ID: {selectedEmployeeID}</p>
          {/* AddCharge component with selectedEmployeeID prop */}
          <UpdateSalary selectedEmployeeID={selectedEmployeeID} />
        </Popup>
      )}
          </tbody>
        </table>
      </body>
   
    </div>
  )
}

export default SupervisorScreen