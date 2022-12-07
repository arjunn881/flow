import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import Auth from '../../pages/Auth/Auth'
import ForTeams from '../../pages/ForTeams/ForTeams'
import Home from '../../pages/Home/Home'
import Products from '../../pages/Products/Products'

export default function AllRouter() {
  return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Auth' element={<Auth/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/ForTeams' element={<ForTeams/>} />
        </Routes>
  )
}
