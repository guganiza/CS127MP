import Link from 'next/link'
import React from 'react'
//import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Login/styles.css"
import "/Users/ASUS/Downloads/CS127MPFrontend/Trial 2/ReactApp/mp-trial/app/css/Login/styles.css"; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className='linkpagebg'>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div>LOGIN</div>
      <Link href= {"/checkedin"}> Login as Frontdesk </Link> <br></br>
      <Link href= {"/concierge"}> Login as Concierge </Link> <br></br>
      <Link href= {"/housekeeping"}> Login as Housekeeping </Link> <br></br>
      <Link href= {"/kitchen"}> Login as Kitchen </Link> <br></br>
      <Link href= {"/supervisor"}> Login as Supervisor </Link> <br></br>
     </div>
  )
}

export default LoginPage