'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react';
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Homepage/styles.css"
import '../app/css/Homepage/styles.css';
import Navbar from './Navbar';

const Homepage = () => {

  return (
    <div className="homepage"> {/* Apply styles using a class */}
      <Navbar />
      <h1 className="text">hello</h1>
      <br></br>
    </div>
  );
};

export default Homepage;
