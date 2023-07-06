import React from 'react';
import '../social-media/socialmedia.css';
import twitter from '../../../public/twitter.png';
import github from '../../../public/github.png';
import linkedIn from '../../../public/linkedin.png';


export const SocialMedia = () => {
  return (
    <div className='social-media-wrapper'>
        <a href='https://twitter.com/i_am_holumidey'><img src={twitter} className='social-media-icon' /></a>
        <a href='https://github.com/just-midemichael'><img src={github} className='social-media-icon' /></a>
        <a href='https://www.linkedin.com/in/olumide-m-ojo/'><img src={linkedIn} className='social-media-icon' /></a>
    </div>
  )
}
