import React from 'react'

const Validation = (props) => {
  let output;

  if (props.length >= props.min) {
    output = (<p>Text long enough</p>);
  }
  else {
    output = (<p>Text too short</p>);
  }

  return (
    <div>
      {output}
    </div>
  )
}

export default Validation