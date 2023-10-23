import React from 'react'

function Button(props) {
  return (
    <button className='bg-background text-foreground px-5 py-2'>
      {props.title}
    </button>
  )
}

export default Button