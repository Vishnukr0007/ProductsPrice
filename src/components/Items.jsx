import React from 'react'

function items(props) {
  return (
    <div style={{display:'flex'}}>
      <div >
        <img className='img' src={props.image} alt=''/>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
        <h2>{props.h2}</h2>
        </div>
    </div>
  )
}

export default items
