'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Navbar from './Navbar';
import '../app/css/Login/styles.css';

function LoginPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleID, setRoleID] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/myapp/employee/login', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          employee_id: username, 
          password: password,
        }),
      });
  
      if (response.ok) { 
        //const roleID = await response.text(); // Assuming roleID is a number
        const data = await response.json();
        const roleID = data;
        console.log('Role ID: ', roleID);
  
        if (roleID === 1) {
          router.push('/checkedin');
        }
        else if(roleID === 2){
          router.push('/housekeeping');
        }
        else if(roleID === 3){
          router.push('/kitchen');
        }
        else if(roleID === 4){
          router.push('/concierge');
        }
        else if(roleID === 5){
          router.push(`/supervisor`);
          //localStorage.setItem('roleid', '5');  //navigate(`/home/${username}`);
        }
      } else {
        throw new Error('Invalid fgghghgusername or password');
      } // INDE PA TO AYOS
    } catch (error) {
      if (error.message === 'Invalid username or password') {
        console.log('Invalid username or password');
      } else {
        window.alert('Invalid username or password');
      }
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="loginform">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={username} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
              </div>
              <button className="login-button" type="submit">Login</button>
              <p className="error-message">{error}</p>
            </form>
      </div>
    </div>
  );
}

export default LoginPage