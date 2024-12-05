import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store';

const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
