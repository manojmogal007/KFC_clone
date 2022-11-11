

import  Menu from '../Pages/Menu'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deals from '../Pages/Deals'
import Home from '../Pages/Home'

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/menu' element={<Menu/>} ></Route>
        <Route path='/deals' element={<Deals/>} ></Route>
    </Routes>
    </div>
  )
}

export default Allroutes