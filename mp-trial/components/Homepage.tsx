'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react';
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Homepage/styles.css"
import '../app/css/Homepage/styles.css';
import Navbar from './Navbar';




const Homepage = () => {


  return (
    <div className="homepage"> {/* Apply styles using a class */}
      <Navbar />

      <img src="https://media.discordapp.net/attachments/775346740122484750/1195260369757798421/CS_127_MP_5.png?ex=65b357f7&is=65a0e2f7&hm=36981c28949b46d807f1eae531efd482b004c8b88c2f8601a0bebc0208bcbfe4&=&format=webp&quality=lossless&width=2022&height=1138" alt="start" />
      <img src="https://media.discordapp.net/attachments/775346740122484750/1195224126844063784/CS_127_MP_3.png?ex=65b33636&is=65a0c136&hm=fb0490b429e3b9eed7c96572eb21913fa6a1341d896d711975b90df204c74d9d&=&format=webp&quality=lossless&width=2022&height=1138" alt="first" />
     <img src="https://media.discordapp.net/attachments/775346740122484750/1195264083155484772/CS_127_MP_8.png?ex=65b35b6c&is=65a0e66c&hm=af4d7a40472db4eba3294fb373def1cff59000df00b20442d2d13706ff1dc2d7&=&format=webp&quality=lossless&width=2022&height=1138" alt="amenities" />
      <img src="https://media.discordapp.net/attachments/775346740122484750/1195218199826944052/CS_127_MP_6.png?ex=65b330b0&is=65a0bbb0&hm=7ab2f90901bd609b56655af4c61a8bebc81aca3647cf701214485ee87f437bc4&=&format=webp&quality=lossless&width=2022&height=1138" alt="map" />

      
    </div>
    
  );
};

export default Homepage;