import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Routes,Route} from "react-router-dom"
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import Product from './Components/Product'
import {Home} from "./Components/Home"

function App() {
 

  return (
    <div className="App">

  <Routes>
<Route path='/login' element={<Login/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/' element={<Home/>}></Route>




  </Routes>     
    </div>
  )
}

export default App
