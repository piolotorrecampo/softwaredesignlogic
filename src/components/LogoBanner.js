import React from 'react'
import Logo from '../assets/images/logo.png'
import Title from '../assets/images/lovelyandmanila.png'

const LogoBanner = () => {
  return(
    <div className='flex justify-center items-center w-full py-3 h-full bg-white'>
      <div className='px-3'>
        <img src={Logo} alt="Lovely and Manila Flowershop" />
      </div>
      <div className='px-3'>
        <img src={Title} alt="Lovely and Manila Flowershop" />
      </div>
    </div>
  )
}

export default LogoBanner