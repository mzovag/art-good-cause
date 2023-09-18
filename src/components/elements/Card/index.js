import React from 'react'

const index = ({ src, title, author, price, inProject = false, status, classname}) => {
  return (
    <div className={`max-w-md h-fit relative flex flex-col justify-end rounded-xl ${classname}`}>
      <img src={src} alt={title} className='w-full brightness-50' />
      {status && !inProject && (<span className='absolute top-1.5 right-1.5 z-10 capitalize px-5 py-0.5 bg-card-bg text-white rounded-xl'>{status}</span>)}
      
      {inProject ? (
        <div className='w-full text-black bg-white rounded-b-xl absolute z-10 bottom-0 left-0 p-4'>
          <div class="flex justify-between">
            <span class="text-xl font-bold text-black ">{title}</span>
            <span class="text-base font-medium text-black "></span>
          </div>
          <div className='w-full bg-gray-190 rounded-full h-2.5'>
            <div className='bg-gray-800 h-2.5 rounded-full' style={{ width: `${price}%` }}></div>
          </div>
          <div class="flex justify-between">
            <span class="text-md font-medium text-black ">{author}</span>
            <span class="text-base font-medium text-black ">{price}/100</span>
          </div>
        </div>) 
        : (
          <div className='w-full absolute z-10 bottom-0 left-0 p-4'>
            <h5 className='text-white font-semibold text-lg'>{title}</h5>
            <div class="flex justify-between">
              <span class="text-2xl font-bold text-white ">Price:</span>
              <span class="text-base font-medium text-white ">{price}/100</span>
            </div>
            <div className='w-full bg-progress rounded-full h-2.5'>
              <div className='bg-white h-2.5 rounded-full' style={{ width: `${price}%` }}></div>
            </div>
            <div className='bg-card-bg text-white rounded-xl py-0.5 px-2 mt-3 w-fit'>{author}</div>
          </div>)
      }
      
    </div>
  )
}

export default index