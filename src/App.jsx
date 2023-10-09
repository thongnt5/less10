import React ,{ useState } from 'react'
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Phone from './page/Phone'
import Laptop from './page/Laptop'
import Ipad from './page/Ipad'
import Navlinks from './NavLink'

function App() {
  return (
    <BrowserRouter>
    
    <Navlinks/>
      <Routes>
        <Route path="/dienthoai" element ={<Phone/>} />
        <Route path="/laptop" element ={<Laptop/>} />
        <Route path="/ipad" element ={<Ipad/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
