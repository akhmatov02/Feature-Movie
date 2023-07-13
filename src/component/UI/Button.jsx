import React from 'react'

export const Button = ({children, onClick}) => {
  return (
    <div>
        <button className="headerBtn" onClick={onClick} >{children}</button>
    </div>
  )
}
