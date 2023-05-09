import './Form.css'
import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';



const Form = () => {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3psmuef', 'template_7io8pgb', form.current, 'rj93RTinbYY5D-kCn')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setUserName('');
          setUserEmail('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
      });

  };
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
        <label htmlFor="">Your Name</label>
        <input type="text" name='user_name' value={userName} onChange={(e) => setUserName(e.target.value)} />

        <label htmlFor="">Email</label>
        <input type="email" name='user_email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

        {/*<label htmlFor="">Subject</label>
        <input type="text" name='user_subject' />
  */}
        <label htmlFor="">Message</label>
        <textarea name="message" id=""   rows="6" placeholder='message here' value={message} onChange={(e) => setMessage(e.target.value)}></textarea >

        <button  className='btn'  value="Send" >Submit</button>
    </form>
  )
}

export default Form