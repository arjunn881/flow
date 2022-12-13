import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import AskQuestion from '../../pages/AskQuestion/AskQuestion'
import Auth from '../../pages/Auth/Auth'
import DisplayQuestion from '../../pages/DisplayQuestion/DisplayQuestion'
import ForTeams from '../../pages/ForTeams/ForTeams'
import Home from '../../pages/Home/Home'
import Products from '../../pages/Products/Products'
import Questions from '../../pages/Questions/Questions'

export default function AllRouter() {
  return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Auth' element={<Auth/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/ForTeams' element={<ForTeams/>} />
            <Route path='/Questions' element={<Questions/>} />
            <Route path='/AskQuestion' element={<AskQuestion/>} />
            <Route path='/Questions/:id' element={<DisplayQuestion/>} />
        </Routes>
  )
}
