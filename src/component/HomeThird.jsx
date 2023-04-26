import React from 'react'
import './home.css'
import { BsLaptopFill,BsFillBagFill,BsFillCarFrontFill,BsTwitter } from "react-icons/bs";
import { TfiCup } from "react-icons/tfi";
import { FaUserCircle,FaCreativeCommonsNcJp } from "react-icons/fa";
const HomeThird = () => {
  return (
    <div style={{width:"100%",height:"500px",backgroundImage:"url('https://images.alphacoders.com/265/265693.png')",backgroundRepeat:'no-repeat',backgroundSize:"cover"}} className='thirdmain'>
              <div className="icon">
            <TfiCup className='same'/>
            <BsFillBagFill className='same'/>
            <BsFillCarFrontFill className='same'/>
            <BsTwitter className='same'/>
         </div>

         <div className="thirdcontent">
            <div className="same">
              
              <h1>22</h1>
              <p style={{fontSize:"20px"}}>Award Winning</p>
            
            </div>
            <div className="same">
            <h1>145</h1>
              <p style={{fontSize:"20px"}}>Finished Project</p>
            </div>
            <div className="same">
            <h1>349</h1>
              <p style={{fontSize:"20px"}}>Product Sold</p>
            </div>
            <div className="same">
            <h1 >2456</h1>
              <p style={{fontSize:"20px"}}>Twitter Fans</p>
            </div>
         </div>
    </div>
  )
}

export default HomeThird
