import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {RxAvatar} from "react-icons/rx"
import {GiSkills} from "react-icons/gi"
import {GoProjectSymlink} from "react-icons/go"
import {BiMessageSquareDetail} from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav("#")} className={activeNav === "#"?"active" :""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about"?"active" :""}><RxAvatar/></a>
      <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills"?"active" :""}><GiSkills/></a>
      <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects"?"active" :""}><GoProjectSymlink/></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact"?"active" :""}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav