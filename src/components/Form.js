import './Form.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3psmuef', 'template_7io8pgb', form.current, 'rj93RTinbYY5D-kCn')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
        <label htmlFor="">Your Name</label>
        <input type="text" name='user_name' />

        <label htmlFor="">Email</label>
        <input type="email" name='user_email' />

        {/*<label htmlFor="">Subject</label>
        <input type="text" name='user_subject' />
  */}
        <label htmlFor="">Message</label>
        <textarea name="message" id=""   rows="6" placeholder='message here'></textarea >

        <button  className='btn'  value="Send" >Submit</button>
    </form>
  )
}

export default Form