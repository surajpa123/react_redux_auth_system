import React from 'react'

import { Login } from './Login'

import { Register } from './Register'

import { Link } from 'react-router-dom'

export const  Home = ()=> {
  return (
    <div>

<h1>Welcome to home page</h1>
        <Link to={"/login"}>Login Page</Link>
<br />
<br />
        <Link to={"/register"}>Register Page</Link>

  {/* <button><Login/></button>

  <button><Register/></button> */}

 
  

    </div>
  )
}
