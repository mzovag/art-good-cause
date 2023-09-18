import React from 'react';

const index = ({children, className}) => {
  return (
    <div className="max-w-lg h-72 flex overflow-hidden relative">
          {/* {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={
                  index === this.state.currentSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }
              />
            );
          })} */}
        </div>
  )
}

export default index