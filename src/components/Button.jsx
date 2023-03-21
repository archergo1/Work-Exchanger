import React from 'react'

const Button = ({text, openModal}) => {

  return (
    <div 
    className="button2"
    onClick={openModal}>
      {text}
    </div>
  )
}

export default Button
    // the appearance settings are in the index.css
    