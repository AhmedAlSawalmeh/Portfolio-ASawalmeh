import React from 'react'
import "./index.css"
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>
    </>
  )
}

export default App