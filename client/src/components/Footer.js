import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
  return(
    <footer className='bg-footer w-full'>
      <div className='mx-40 flex flex-col justify-center items-center'>
        <div className='text-white py-3 flex flex-row justify-between w-full gap-3'>
          <div className='flex flex-col gap-3 w-40'>
            <p className='text-2xl'>Contact Us</p>
            <p>Stall#3 J. Chanyungco St., Marikina City, 1800 Metro Manila, Marikina City</p>
            <p>+63 123 456 1234</p>
            <p>lovelymanila@gmail.com</p>
          </div>
          <div className='flex flex-col gap-3 w-40'>
          <p className='text-2xl'>Information</p>
            <Link to='/about-us'>About Us</Link>
          </div>
          <div className='flex flex-col gap-3 w-40'>
            <p className='text-2xl'>Customer Service</p>
            <Link to='/contact-us'>Contact Us</Link>
          </div>
        </div>
        <div className='flex flex-col py-2 text-white justify-center items-center'>
          <div className='bg-white h-1 w-auto'></div>
          <p>Copyright © Lovely & Manila Flowershop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer