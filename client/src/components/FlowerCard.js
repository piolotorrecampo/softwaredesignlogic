import React from 'react'

const FlowerCard = (props) => {

  return (
    <div>
      <div>
        <img
            src={props.image}
            alt={props.alt}
        />
      </div>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <h4 className='text-bold'>{props.title}</h4>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default FlowerCard
