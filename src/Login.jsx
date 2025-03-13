import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import data from "../data/data.json"


const Login = () => {
  const navigate=useNavigate();
  const users=data.users;
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  });
  console.log(users);
  
  

  function submitHandler(e){
    e.preventDefault();
    const find=users.find((user)=>user.email===loginData.email && user.password===loginData.password)
    if(find){
      navigate("/products")
    }
    else{
      alert("invalid email or password")
    }
    

  }


  return (
    <div>

      <div className='login-page flex items-center justify-center'>
        <form onSubmit={submitHandler} className='login-form flex flex-col items-center gap-[1vw]' >
          <h1>Login User</h1>
          <input value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} type="text" placeholder='Enter user email' />
          <input value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})}  type="text" placeholder='Enter user password' />
          <button className='login-btn'>Login</button>
          <p>If you don't have account ? <Link to={"/"} className='text-blue-900'>Click Here</Link> </p>
        </form>
      </div>

    </div>
  )
}

export default Login
