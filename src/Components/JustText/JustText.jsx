import React from 'react'
import './JustText.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


const JustText = () => {
  return (
    <>
    
    <div className="Sadman_justText">
      <div className="container">
         <div className="flex_Text">
            <div className="first_One">
             <h2>Wissenswertes</h2>
            </div>
            <div className="secend_one">
              <p>
              Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in. 
              </p>
            <div className="secend_big_link">
              <Link to={'#'}>Unser Blog</Link>
               <IoIosArrowForward />
            </div>
            </div>
            <div className="third_one">
              <p>Unsere Letzten Beiträge</p>
            </div>

            <div className="fourth_one">
              <div className="single_fourth">
               <h3>Sed eget morbi cursus elit ipsum <br />  pellentesque</h3>
               <p>Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...</p>
               <div className="fourth_big_link">
              <Link to={'#'}>Lesen Sie weiter</Link>
               <IoIosArrowForward />
            </div>
              </div>

              <div className="single_fourth">
               <h3>Sed eget morbi cursus elit ipsum <br />  pellentesque</h3>
               <p>Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...</p>
               <div className="fourth_big_link">
              <Link to={'#'}>Lesen Sie weiter</Link>
               <IoIosArrowForward />
            </div>
              </div>

              <div className="single_fourth">
               <h3>Sed eget morbi cursus elit ipsum <br />  pellentesque</h3>
               <p>Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...</p>
               <div className="fourth_big_link">
              <Link to={'#'}>Lesen Sie weiter</Link>
               <IoIosArrowForward />
            </div>
              </div>
            </div>
         </div>
      </div>
    </div>
    
    </>
  )
}

export default JustText