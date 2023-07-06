import React, {useState} from 'react';
import '../header/header.css';
import { Logo } from '../../components/logo/Logo';
import { Navlink } from '../../components/navlink/Navlink';
import { Hamburger } from '../../components/hamburger/Hamburger';


export const Header = () => {

    const [hamburgerMenu, setHamburgerMenu] = useState('');
  const handleHamburgerDisplay = () => {
    if(hamburgerMenu === '') {
        setHamburgerMenu('display');
    }
    else {
        setHamburgerMenu('');
    };
  }
  return (
    <React.Fragment>
        <header>
            <div className='logo-container'>
                <Logo/>
            </div>
            <div className='navigation-container'>
                <Navlink/>
            </div>
            <div className='hamburger-container' onClick={handleHamburgerDisplay}>
                <Hamburger/>
            </div>
        </header>
        <div className={`hamburger-menu ${hamburgerMenu}`}>
            <Navlink/>
        </div>
    </React.Fragment>
  )
}
