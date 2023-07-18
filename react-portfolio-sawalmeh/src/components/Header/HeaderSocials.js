import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
const HeaderSocials = () => {
    return (
        <div className='headerScoials'>
            <a href='https://www.linkedin.com/in/ahmedalsawalmeh/' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/AhmedAlSawalmeh' target='_blank'><FaGithub/></a>
            <a href='https://web.facebook.com/ahmed.swalmeh/' target='_blank'><BsFacebook/></a>
        </div>
    )
}

export default HeaderSocials