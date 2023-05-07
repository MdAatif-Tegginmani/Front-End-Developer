import React from 'react'
import './HeroImage.css'
import Img from "../assets/bg.jpg" 
import { Link } from 'react-router-dom'


const HeroImage = () => {
  return (
    <div className='hero'>
        
        <div className='mask'>
            <img className='into-img' src={Img} alt="" />
        </div>
        <div className='content'>
            <p>HI,I M A FREELANCER.</p>
            <h1>React Developer. </h1>
            <div>
                <Link to="/projects" className='btn' >Projects</Link>
                <Link to="/contacts" className='btn btn-light' >Contact</Link>

            
            </div>
            
        </div>
    
    
    </div>
  )
}

export default HeroImage