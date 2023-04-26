import React from 'react'
import './home.css'
import { BsLaptopFill } from "react-icons/bs";
import { FaUserCircle,FaCreativeCommonsNcJp } from "react-icons/fa";
const HomeSecond = () => {
  return (
    <div className='secondmain'>
         <h1>Our Feature</h1>
         <div className="icon">
            <BsLaptopFill className='same'/>
            <FaUserCircle className='same'/>
            <FaCreativeCommonsNcJp className='same'/>
         </div>

         <div className="content">
            <div className="same">
              
              <h2>Fully Response</h2>
              <p style={{color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem inventore explicabo consectetur earum distinctio illo voluptatibus eos magnam cum.</p>
            
            </div>
            <div className="same">
            <h2>Fully Response</h2>
              <p style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem inventore explicabo consectetur earum distinctio illo voluptatibus eos magnam cum.</p>
            </div>
            <div className="same">
            <h2>Fully Response</h2>
              <p style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem inventore explicabo consectetur earum distinctio illo voluptatibus eos magnam cum.</p>
            </div>
         </div>
    </div>
  )
}

export default HomeSecond
