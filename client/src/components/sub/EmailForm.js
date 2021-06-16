import React from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'bootstrap-react';


export default function EmailForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7l3rxrk', 'template_bdbcmks', e.target, 
    'user_2vr8riZaHDkUEkHBgVXTU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <h2>Email Me:</h2>
      <input type="hidden" name="contact_number"  />
      {/* <label></label> */}
      <input type="text" name="user_name" placeholder='Name'/>
      {/* <label>Email</label> */}
      <input type="email" name="user_email" placeholder='email'/>
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Message'/>
      <Button type="submit" value="Send" color='secondary'/>
    </form>
  );
}