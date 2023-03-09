import React, { Children } from 'react'
// import Container from "./Container";

const Wrap = (Children) => {
  return (
    <div className="w-full">
      {Children}
    </div>
  )
}

export default Wrap;