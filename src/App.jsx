import React,{useState} from 'react'
import data from "../data/data.json"
import {Link,useNavigate} from "react-router-dom"

const App = () => {
  const users=data.users;
  localStorage.setItem("usersdata",JSON.stringify(users))
  
  
  
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });

  const navigate=useNavigate();

  function submitHandler(e){
    e.preventDefault();

    users.push(formData);
    setFormData({
      username:"",
      password:"",
      email:"",
      
    })


  }


  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={submitHandler} className='flex flex-col gap-4 items-center '>
        <h1 className='text-xl font-bold text-green-600'  >Register User</h1>
        <input value={formData.name} onChange={(e)=>setFormData({...formData,username:e.target.value})} className='bg-neutral-500 px-3 py-2 rounded-md text-white outline-none' type="text" placeholder='Enter user name' required/>
        <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className='bg-neutral-500 px-3 py-2 rounded-md text-white outline-none' type="text" placeholder='Enter user email' required />
        <input value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className='bg-neutral-500 px-3 py-2 rounded-md text-white outline-none' type="password" placeholder='Enter the password' required />
        <button className='bg-green-500 px-18 py-2 rounded-md text-white outline-none'>Register</button>
      </form>
    </div>
  )
}

export default App
