import React from 'react'
import "./Skills.css"
import { BsPatchCheckFill} from "react-icons/bs"
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className='container skills_container'>
      <div className='skills_frontend'>
        <h3>Frontend Development</h3>
        <div className='skills_content'>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>TailWind</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermedite</small>
            </div>
          </article>
         
        </div>
      </div>
      <div className='skills_backend'>
      <h3>Backend Development</h3>
        <div className='skills_content'>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>Express JS</h4>
            <small className='text-light'>Experinced</small>
            </div>
          </article>
          <article className='skills_details'>
            <BsPatchCheckFill className='skills_icons'/>
            <div>
            <h4>Firebase</h4>
            <small className='text-light'>Intermedite</small>
            </div>
          </article>
         
        </div>
      </div>
      </div>
    </section>
  )
}

export default Skills