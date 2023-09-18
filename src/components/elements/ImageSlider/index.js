import React, { useState, useEffect } from 'react';
import cx from 'classnames';

const Slide = ({visibility, src, key}) => {

  return (
    <div className={cx("w-full py-4 animate-slide", { block: visibility, hidden: !visibility })} >
      <img className="w-full border-3" src={src} alt={`slide-`+key}/>
    </div>
  )
}

const ImageSlider = ({children, images, className}) => {
  
  const[slideIndex, setSlideIndex] = useState(0);

  let timer = 7; // sec
  const _timer = timer;


  useEffect(() => {
    if (images.length) {
      // this function runs every 1 second
      setSlideIndex(0);

      setInterval(() => {
        setSlideIndex(slideIndex + 1);

      }, 7000);
    }
  }, [images, slideIndex]);

  return (
    <div className="w-full max-w-xl overflow-hidden relative">
      {images.map((item, i) => 
        <Slide src={item} key={i} visibility={i === slideIndex}/>
      )}
    </div>
  )
}

export default ImageSlider