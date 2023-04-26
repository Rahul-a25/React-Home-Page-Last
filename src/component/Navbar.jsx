import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navmain'>
        <div className="left">
            <h2 style={{textAlign:"justify",marginLeft:"40px"}}>Flex Bussiness Pro <br />
             <span style={{fontSize:"15px"}}>cleanand modern business theme</span></h2>
        </div>
        <div className="right">
             <ul>
             <li style={{color:"#00b894"}}>Home</li>
              <li>About Us</li>
              <li>Style Guide</li>
              <li>Blog</li>
              <li>Contact Us</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar
