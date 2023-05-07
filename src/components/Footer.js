import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
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
                            <p>123 Housing Society.</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className='phone'>
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    1231231-321</h4>
                    

                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        nwe@gmail.com</h4>
                        </div>
                </div>
                <div className='right'>
                    <h4>About The company</h4>
                    <p>This is me Ak </p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />


                    </div>
                
                </div>

            </div>
        </div>





    )
}

export default Footers