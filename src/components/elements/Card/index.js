import React from 'react'

const index = ({className, src, title, author, price, status}) => {
  return (
    <div className={`max-w-md h-fit relative flex flex-col justify-end rounded-xl`}>
      <img src={src} alt={title} className='w-full brightness-50' />
      <span className='absolute top-1.5 right-1.5 z-10 capitalize px-5 py-0.5 bg-card-bg text-white rounded-xl'>{status}</span>
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
      </div>
    </div>
  )
}

export default index