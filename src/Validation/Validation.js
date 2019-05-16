import React from 'react'

const Validation = (props) => {
  return (
    <div>
      {
        props.length < props.min ?
          <p style={{ color: 'red' }}>Text too short</p> :
          <p style={{ color: 'green' }}>Text long enough</p>
      }
    </div>
  )
}

export default Validation