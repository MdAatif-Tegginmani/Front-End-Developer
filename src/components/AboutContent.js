import React from 'react'
import './AboutContentStyles.css'

import { Link } from "react-router-dom"
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.jpg'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Md Aatif Tegginamani </h1>
                <p>I'm a front end developer with a year of experience in web development. I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.</p>

                <Link to='/contact'>
                    <button className='btn'>Contact</button>

                </Link>
                

            </div>



            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={react1}  className='img' alt="" />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={react2} className='img' alt="" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AboutContent

// <div className="about">
//             <div className="left">
//                 <h1>Who Am I</h1>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
//                 temporibus ip dignissimos.</p>

//                 <Link to="/contact">
//                     <button className="btn">Contact</button>
//                 </Link>
//             </div>

//             <div className="right">
//                 <div className="img-container">
//                     <div className="img-stack top">
//                         <img src={react1} alt="true" />
//                     </div>
//                     <div className="img-stack bottom">
//                         <img src={react2} alt="true" />
//                     </div>

//                 </div>


//             </div>


//         </div>