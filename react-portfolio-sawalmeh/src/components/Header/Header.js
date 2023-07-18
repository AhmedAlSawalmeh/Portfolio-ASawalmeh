import React from 'react'
import "./Header.css"
import Buttons from './Buttons'
import homeImage from "../../assets/About image.png"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
    <h5>
      Hello I'm 
    </h5>
    <h1>
      Ahmed Al Sawlameh
    </h1>
    <h5 className='text-light'>
    FullStack Developer
    </h5>
    <Buttons/>
    <HeaderSocials/>
    <a href="#contact" className='scroll_Down'>Scroll Down</a>
    <div className='homeImage'>
    <img src={homeImage}/>
    
    </div>

      </div>
      
    </header>
  )
}

export default Header