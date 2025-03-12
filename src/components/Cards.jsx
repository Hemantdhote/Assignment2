import React from 'react'

const Cards = ({data,deleteHandler,index}) => {
  
  return (
    <div>
      <div className='card'>
        <h3>{data.name}</h3>
        <h4>{data.price}</h4>
        <p>{data.description}</p>
        <div className='flex items-center justify-between mt-[1vw]'>
        <button className='px-[0.5vw] py-[0.5vw] bg-blue-500 text-white rounded-md '>Edit</button>
        <button  onClick={()=>deleteHandler(index)} className='px-[0.5vw] py-[0.5vw] bg-red-500 text-white rounded-md '>Delete</button>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
