import React from 'react';
import { generatePath } from "react-router";
import { NavLink } from 'react-router-dom';

const index = ({ src, title, author, price, inProject = false, status, id, classname}) => {
  const path = generatePath("/nft-image/:id", { id: id });
  return (
      <div className={`max-w-md h-fit relative flex flex-col justify-end rounded-xl ${classname}`}>
        <NavLink to={path} > 
        <img src={src} alt={title} className='w-full brightness-50' />
        {status && !inProject && (<span className='absolute top-1.5 right-1.5 z-10 capitalize px-5 py-0.5 bg-card-bg text-white rounded-xl'>{status}</span>)}
        
        {inProject ? (
          <div className='w-full text-black bg-white rounded-b-xl absolute z-10 bottom-0 left-0 p-4'>
            <div className="flex justify-between">
              <span className="text-xl font-bold text-black ">{title}</span>
              <span className="text-base font-medium text-black "></span>
            </div>
            <div className='w-full bg-gray-190 rounded-full h-2.5'>
              <div className='bg-gray-800 h-2.5 rounded-full' style={{ width: `${price}%` }}></div>
            </div>
            <div className="flex justify-between">
              <span className="text-md font-medium text-black ">{author}</span>
              <span className="text-base font-medium text-black ">{price}/100</span>
            </div>
          </div>) 
          : (
            <div className='w-full absolute z-10 bottom-0 left-0 p-4'>
              <h5 className='text-white font-semibold text-lg'>{title}</h5>
              <div classNmae="flex justify-between">
                <span className="text-2xl font-bold text-white ">Price:</span>
                <span className="text-base font-medium text-white ">{price}/100</span>
              </div>
              <div className='w-full bg-progress rounded-full h-2.5'>
                <div className='bg-white h-2.5 rounded-full' style={{ width: `${price}%` }}></div>
              </div>
              <div className='bg-card-bg text-white rounded-xl py-0.5 px-2 mt-3 w-fit'>{author}</div>
            </div>)
        }
        </NavLink>
      </div>
   
  )
}

export default index