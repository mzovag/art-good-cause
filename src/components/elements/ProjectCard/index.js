import React from 'react';

const index = ({children, className}) => {
  return (
    <div
      className={`mx-auto my-10 w-4/5 ${className}`}
    >
        HERE WILL BE PROJECT
      {children}
    </div>
  )
}

export default index