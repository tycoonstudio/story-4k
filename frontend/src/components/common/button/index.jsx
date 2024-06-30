import React from 'react'
import "./_style.scss"


function ButtonHead({name}) {
  return (
    <div className='button-head'>
      <button>{name}</button>
    </div>
  )
}

export default ButtonHead
