import React from 'react';
import { NavLink } from 'react-router-dom';
import { generatePath } from "react-router";

const randomImages = [
    require('../../assets/bg-1.png'),
    require('../../assets/bg-2.png'),
    require('../../assets/bg-3.png'),
    require('../../assets/bg-4.png'),
    require('../../assets/bg-5.png'),
    require('../../assets/bg-6.png'),
    require('../../assets/bg-7.png')
  ];

const index = ({ avatarSrc, name, artsNumbers, bgImage, cost, description, id, children }) => {
  const currentImage = bgImage ? bgImage : randomImages[Math.floor(Math.random()*randomImages.length)];
  const path = generatePath("/progect/:id", { id: id });

  return (
    <div className='grid grid-cols-3 md:grid-cols-4 gap-4 p-10 rounded-2xl w-full bg-cover' style={{ backgroundImage: `url(${currentImage})` }}>
      <div className='col-start-1 col-end-4 md:col-start-1 md:col-end-1 flex flex-col'>
        <NavLink to={path} >                    
          <img src={avatarSrc} alt={name} className='w-32 h-32 border-4 border-gray-300 rounded-lg object-cover' />
        </NavLink>
        <h2 className='text-2xl text-white mb-2 mt-5'>{name}</h2>
        <div className='text-base text-white'>{artsNumbers} Arts | {cost} NFT</div>
        <div className='line-clamp-3 text-lightGray text-base mt-8'>{description}</div>
      </div>
      {children}
    </div>
  )
}

export default index