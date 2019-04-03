import React from "react";
import Logo from '../../assets/logo.png'
import './header.scss'

const Header = props => {
  return (
      <header data-test='headerComponent'>
        <div className='wrap'>
          <div className='logo'>
            <img src={Logo} alt='A logo' id='logoImg' />
          </div>
        </div>
      </header>
  )
};

export default Header;
