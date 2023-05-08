import './Form.css'


import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <label htmlFor="">Your Name</label>
        <input type="text" />

        <label htmlFor="">Email</label>
        <input type="email" />

        <label htmlFor="">Subject</label>
        <input type="text" />

        <label htmlFor="">Message</label>
        <textarea name="" id=""  rows="6" placeholder='message here'></textarea >

        <button className='btn'>Submit</button>
    </div>
  )
}

export default Form