import React from 'react';
import '../contact/contact.css';
import { SocialMedia } from '../../components/social-media/SocialMedia';

export const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-wrapper'>
        <h2 className='title'>Contact Me</h2>
        <div className='contact-content'>
          <p>Email: <a href='mailto:olumide.m.ojo@gmail.com'>olumide.m.ojo@gmail.com</a></p>
          <p>Telephone: <a href='tel:+2348179207152'>+2348179207152</a></p>
        </div>
        <div className='social-media-space'>
          <SocialMedia/>
        </div>
      </div>
     
    </section>
  )
}
