import React,{useState,useEffect} from 'react'
import data from "../data/data.json"
import {Link,useNavigate} from "react-router-dom"

const App = () => {
  const navigate=useNavigate();

  const users=data.users;
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });
 

  

  
  

  function submitHandler(e){  
    e.preventDefault();
    users.push(formData);
    alert("user registered successfully")
    navigate("/navbar")
    setFormData({
      username:"",
      password:"",
      email:"",
    })


  }


  return (
    <div>
      <div className='register-page flex items-center justify-center'>
        <form onSubmit={submitHandler} className='register-form'>
          <h1>Register User</h1>
          <input value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} type="text" placeholder='Enter username' required/>
          <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} type="text" placeholder='Enter user email' required />
          <input value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} type="text" placeholder='Enter user password' required/>
          <button className='register-btn'>Register</button>
          <p>If you have already account ? <Link to={"/login"} className='text-blue-400'>Login Here</Link></p>
        </form>
      </div>
    </div>



  )
}

export default App
