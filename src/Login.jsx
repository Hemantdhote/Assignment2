import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import data from "../data/data.json"


const Login = () => {
  return (
    <div>

      <div className='login-page flex items-center justify-center'>
        <form className='login-form flex flex-col items-center gap-[1vw]' >
          <h1>Login User</h1>
          <input type="text" placeholder='Enter user email' />
          <input  type="text" placeholder='Enter user password' />
          <button className='login-btn'>Login</button>
          <p>If you don't have account ? <Link to={"/"} className='text-blue-400'>Click Here</Link> </p>
        </form>
      </div>

    </div>
  )
}

export default Login
