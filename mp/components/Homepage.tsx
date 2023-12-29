import Link from 'next/link'
import React from 'react'
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Homepage/styles.css"
import Navbar from './Navbar';



const Homepage = () => {
  return (
    <div className="homepagebg"> {/* Apply styles using a class */}
      <Navbar />
    </div>
  );
};

export default Homepage;

