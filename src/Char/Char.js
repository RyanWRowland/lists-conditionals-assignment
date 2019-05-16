import React from 'react'
import './Char.css'

const Char = (props) => {
  return (
    <div className="char" onClick={props.delete}>
      {props.char}
    </div>
  )
}

export default Char
