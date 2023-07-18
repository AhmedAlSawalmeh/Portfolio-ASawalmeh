import React from 'react'
import  CV from "../../assets/Ahmed Al Sawalmeh.pdf"
const Buttons = () => {
  return (
    <div className='buttons'>
        <a className='btn' href={CV} download> Download CV</a>
        <a className="btn btn-primary" href='#cantact'>Conact Me </a>
    </div>
  )
}

export default Buttons