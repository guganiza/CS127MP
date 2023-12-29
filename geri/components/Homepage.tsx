import Link from 'next/link'
import React from 'react'
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Homepage/styles.css"
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/Homepage/styles.css"; // Import the CSS file for styling
import Navbar from './Navbar';



const Homepage = () => {
  return (
    <div className="homepagebg"> {/* Apply styles using a class */}
      <Navbar />
      <h1 className="text">hello</h1>
    </div>
  );
};

export default Homepage;

