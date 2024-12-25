import React, { useState } from 'react'
import './MobileNav.css'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


const MobileNav = () => {
  const [show , setshow] = useState(false)
  return (
    <>
    
    <nav className='mobile_nav'>
      <div className="container">

        <div className="responsive_for">
        <div className="main_mobile_res">
          <img src="Img/logo.png" alt="logo" />
          <FaBars onClick={()=>setshow(!show)} className='text-2xl text-orange-400'/>
        </div>
           
           {
           show?
           <div className="show_value">
           <ul className='mob_ul'>
           <li><Link to={'#'}>Startseite</Link></li>
           <li>
            <Link to={'#'}>Leistungen</Link>
            <MdOutlineArrowDropDown />
           </li>
           <li>
            <Link to={'#'}>Referenzen</Link>
            <MdOutlineArrowDropDown />
           </li>
           <li><Link to={'#'}>Über uns</Link></li>
        </ul>
        <div className="menu_link_mobile">
            <Link to={'#'}>Kontakt</Link>
            <MdOutlineEmail className='text-white'/>

         </div>
           </div>


           : ""
           }
        </div>

      </div>
    </nav>
    
    </>
  )
}

export default MobileNav