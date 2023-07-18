import React from 'react'
import "./About.css"
import aboutImage from "../../assets/AhmedImage.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderActive } from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2> About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_image'>
            <img src={aboutImage} />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experince</h5>
              <small>3+ Years</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
         
          
            <article className='about_card'>
              <VscFolderActive className='about_icon' />
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>
          </div>
          
           
          
          <p>
            I am a passionate individual who is deeply interested in exploring new technologies and discovering opportunities to learn and grow.
            Currently, I am striving to become proficient in full-stack development and am fully committed to achieving my career aspirations in this field
            With my dedication and focus, I am determined to gain a thorough understanding of coding and leverage this knowledge to build a successful career.
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me </a>
        </div>
      </div>
    </section>
  )
}

export default About