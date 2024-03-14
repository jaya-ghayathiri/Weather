import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Weather from './components/Weather'
import '../src/App.css'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/weather' element={<Weather />}></Route>
      </Routes>
      </BrowserRouter>
</>
  )
}

export default App
