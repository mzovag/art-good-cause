import React from 'react'

const index = ({children, className, src: string, title, author, price}) => {
  return (
    <div       
      className={`bg-card px-6 py-10 rounded-xl ${className}`}
    >
      {children}
    </div>
  )
}

export default index