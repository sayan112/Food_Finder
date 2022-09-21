import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
 import Recipie from './Recipie'
import Searched from './Searched'
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cuisine/:type" element={<Cuisine/>} />
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipie/:recipiename' element={<Recipie/>}/>
      </Routes> 
    </div>
  );
}

export default Pages
