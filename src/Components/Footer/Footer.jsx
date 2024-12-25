import React from 'react'
import './Footer.css'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    
    <footer className='footer_f'>
     <div className="deep_flex">
     <div className="container">
         <div className="here_img_text">
            <div className="footer_text">
             <p>Mach Karriere bei uns</p>
             <h2>Bewirb dich bei uns</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
             <div className="footer_big_link">
              <Link to={'#'}>Karriere</Link>
               <IoIosArrowForward />
            </div>
            </div>
            <img src="Img/footer.png" alt="foo" />
         </div>
      </div>
     </div>
      <div className="footer_flex">
         <div className="container">
            <div className="footer_content">
               <img src="Img/foologo.png" alt="logo" />
               <div className="tttttttttext">
                  <div className="text">
                  <h4>Geschäftsführer</h4>
                  <p>Beratender Ingenieur
                  Dipl.-Ing. Klaus Weiss</p>
                  </div>
                  <div className="text">
                     <h4>Adresse</h4>
                     <p>Straßenname 7 
                     12345 Stadt</p>
                  </div>
               </div>
            </div>
               <hr className='mt-[10px]'/>
             <div className="only_two flex gap-3 mt-4 text-white items-center">
               <p>Impressum</p>
               <span className='h-4 w-[2px] justify-center bg-white text-white inline-block'></span>
               <p>Datenschutz</p>
               </div>  
             
         </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer