import React from 'react';
import emailjs from 'emailjs-com';


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
    <form className="contact-form" onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column'}}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}