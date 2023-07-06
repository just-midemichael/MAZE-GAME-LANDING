import React from 'react';
import '../body/body.css'
import { About } from '../../pages/about/About';
import { Contact } from '../../pages/contact/Contact';
import { HeroSection } from '../../components/hero/HeroSection';


export const Body = () => {
  return (
    <search className='body-section'>
        <HeroSection/>
        <About/>
        <Contact/>
    </search>
  )
}
