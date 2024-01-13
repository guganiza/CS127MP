import React, { useState } from 'react';

const UpdateSalary = ({ selectedEmployeeID, onClose }) => {
  const [newSalary, setNewSalary] = useState('');

  const handleSalaryChange = (event) => {
    setNewSalary(event.target.value);
    //console.log(selectedEmployeeID);
    //console.log(newSalary);
  };

    
  const handleUpdateSalary = async () => {
    try { //const response = await fetch(`http://localhost:8080/myapp/employee/updateSalary?emp_id=${selectedEmployeeID}`, {
      const response = await fetch(`http://localhost:8080/myapp/employee/updatesalary?emp_id=${selectedEmployeeID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emp_id: selectedEmployeeID,
          salary: newSalary,
        }),
      });
  
      if (response.ok) {
        console.log('Salary updated successfully');
        // You can add logic here for additional actions after successful update
        //onClose(); // Close the popup after successful update
        //window.location.reload();
      } else {
        console.error('Failed to update salary');
        // Handle error scenarios, such as showing an error message to the user
      }
    } catch (error) {
      console.error('Error during salary update:', error);
      // Handle network or other errors
    }
  };
  

  return (
    <div className='update-salary-popup'>
      <h2>Update Salary</h2>
      <label htmlFor="newSalary">New Salary:</label>
      <input type="text" id="newSalary" value={newSalary} onChange={handleSalaryChange} />
      <button onClick={handleUpdateSalary}>Update Salary</button>
    </div>
  );
};

export default UpdateSalary