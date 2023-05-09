import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import React from 'react'


const Footers = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Bijapur, India</p>
                            
                        </div>
                    </div>
                    <div className='phone'>
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    7975071230</h4>
                    

                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        mdaatif84@gmail.com</h4>
                        </div>
                </div>
                <div className='right'>
                    <div className='social'>
                    <a href="https://github.com/MdAatif-Tegginmani" target='_blank' rel='noreferrer' >
                    <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} 
                    />
                    </a>
                            
                        <a href="https://twitter.com/vilen_84" target='_blank' rel='noreferrer'>
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                         <a href="https://www.linkedin.com/in/mdaatif/" target='_blank' rel='noreferrer' >
                         <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                         </a>   


                    </div>
                
                </div>

            </div>
        </div>





    )
}

export default Footers