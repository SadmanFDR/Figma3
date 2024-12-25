import React from 'react'
import './Navber.css'
import { Link } from 'react-router-dom'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";



const Navber = () => {
  return (
    <>
    
    <nav className='sadman_nav'>
      <div className="container">
        <div className="main_nav">
         <div className="logo_img">
            <img src="Img/logo.png" alt="Logo" />
         </div>
         <div className="menu">
            <ul>
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
         </div>
         <div className="menu_link">
            <Link to={'#'}>Kontakt</Link>
            <MdOutlineEmail className='text-white'/>

         </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Navber