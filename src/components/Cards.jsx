import React, { useState } from 'react'

const Cards = ({ data, deleteHandler, editHandler, index }) => {

  

  const [starRating, setStarRating] = useState(0);
  const [reveiw, setReveiw] = useState([]);
const [formData, setFormData] = useState({
  review:""
});

const handleRating=(star)=>{
  setStarRating(star)
}


  function submitHandler(e) {
    e.preventDefault();
    setReveiw([...reveiw,formData])
   setFormData({
    review:""
   })
  }
  
  return (
    <div>
      <div className='card'>
        <h3>{data.name}</h3>
        <h4>${data.price}</h4>
        <p>{data.description}</p>
        <div className='flex flex-wrap gap-2 mt-1'>
          {reveiw.map((elem,index)=>(
            <p className='bg-neutral-300 py-1 px-1 rounded-md'>{elem.review}</p>
          ))}
        </div>
        <div className='flex items-center justify-between mt-[0.7vw]'>
          <div>
            <form onSubmit={submitHandler}>
            <input value={formData.review} onChange={(e)=>setFormData({...formData,review:e.target.value})} className='bg-neutral-200 w-[110%] px-[0.5vw]  py-[0.6vw] rounded-[0.7vw] text-[1vw]  outline-none' type="text"  placeholder='you can review here'/>
            </form>
          </div>
          <div className='rating'>
            

            {
              [1,2,3,4].map((star)=>{
                return <i 
                onClick={() => handleRating(star)} 
                className={`star ri-star-fill cursor-pointer ${star <= starRating ? 'text-yellow-400' : ''}`}
              ></i>

              
              })

            }
            
          </div>
        </div>
        <div className='flex items-center justify-between mt-[1vw]'>
          <button onClick={() => editHandler(index)} className='px-[2vw] py-[0.5vw] bg-blue-500 text-white rounded-md text-[1vw]'>Edit</button>
          <button onClick={() => deleteHandler(index)} className='px-[2vw] py-[0.5vw] bg-red-500 text-white rounded-md text-[1vw] '>Delete</button>
        </div>
      </div>

    </div>
  )
}

export default Cards
