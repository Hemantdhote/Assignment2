import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'


const Products = () => {

  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name:"",
    price:"",
    description:""
  });
  

  function submitHandler(e){
    e.preventDefault();

    if(editIndex!==null){
      
    }
    else{
      setData([...data,formData]);

    }


    
    setFormData({
      name:"",
      price:"",
      description:""
    })
  }

  function deleteHandler(elemm){
    const filteredData=data.filter((elem,idx)=>idx!==elemm);
    setData(filteredData)
  }



  return (
    <div className='min-h-screen bg-[#3b3b3b]'>
      <div className='navbar'>
        <h3>Product List</h3>
        <Link to={"/"}>Logout</Link>
      </div>
      <div className='product'>
      <div>
        <form onSubmit={submitHandler} className='product-form'>
          <input value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} type="text" placeholder='Enter the product name' />
          <input value={formData.price} onChange={(e)=>setFormData({...formData,price:e.target.value})} type="text" placeholder='Enter the price of product' />
          <input value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})} type="text" placeholder='Enter the discription' />
          <button className='product-btn'>Add</button>
          
        </form>
      </div>
      </div>

      <div className='p-[2vw] flex gap-[2vw] flex-wrap'>
        {data.map((elem,idx)=>(
          <Cards key={idx}  data={elem} index={idx} deleteHandler={deleteHandler}/>
        ))}
       
      
      </div>
      
    </div>
  )
}

export default Products
