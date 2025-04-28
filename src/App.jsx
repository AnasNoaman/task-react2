import React from 'react'
import Navbar from './Componant/navbar/Navbar'
import Hero from './Componant/hero/Hero'
import Portfolio from './Componant/portfolio/Portfolio'
import About from './Componant/About/About'
import Contact from './Componant/contact/Contact'
import Footer from './Componant/footer/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (

    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={
          <>
            <Portfolio />
            <About />
            <Contact />
          </>
        }></Route>
        <Route path='/portfolio' element={<Portfolio />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App