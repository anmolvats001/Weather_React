import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import NextData from './pages/NextData'
import About from './pages/About'
const App = () => {
  return (
    <div>
       <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/next'element={<NextData/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
