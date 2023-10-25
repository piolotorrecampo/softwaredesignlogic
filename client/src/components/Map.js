import React from 'react'
import GoogleMaps from './GoogleMaps'
import Button from './Button'

const Map = () => {
  return(
    <div className='flex flex-row py-20 gap-10 w-full justify-center items-center'>
      <div className='p-5'>
        <GoogleMaps/>
      </div>
      <div className='flex flex-col gap-8 max-w-lg text-white'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-6xl'>Where are we located?</h2>
          <p className='text-xl'>Stall#3 J. Chanyungco St., Marikina City, 1800 Metro Manila, Marikina City, Philippines</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Button
            title='Contact Us'
          />
        </div>
      </div>
    </div>  
  ) 
}

export default Map
