import Link from 'next/link'
import React from 'react'
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Login/styles.css"

const LoginPage = () => {
  return (
    <div className='linkpagebg'>

    <div>LOGIN</div>

     <Link href= {"/frontdesk"}> Login as Frontdesk </Link> <br></br>
     <Link href= {"/concierge"}> Login as Concierge </Link> <br></br>
     <Link href= {"/housekeeping"}> Login as Housekeeping </Link> <br></br>
     <Link href= {"/kitchen"}> Login as Kitchen </Link> <br></br>
     <Link href= {"/supervisor"}> Login as Supervisor </Link> <br></br>
     <Link href= {"/admin"}> Login as Admin </Link> <br></br>
     

     </div>
  )
}

export default LoginPage