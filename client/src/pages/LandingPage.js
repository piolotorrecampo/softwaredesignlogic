import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import GoogleMaps from '../components/GoogleMaps'
import Carousel from '../components/Carousel'

const Hero = () => {
  return(
    <div className='mx-40 w-auto py-32 gap-8 flex flex-col text-white'>
      <div className='w-3/5 flex flex-col gap-4'>
        <h1 className='text-6xl'>
          Unleash the Magic of AI to Discover Your Perfect Flower! 
        </h1>
        <p className='text-2xl'>
          Simply click the button below to explore a world of blossoms with our cutting-edge image recognition technology.
        </p>
      </div>
      <div className=''>
        <Button
        title="Search Flower"
        />
      </div>
    </div>
  )
}

const Collections = (props) => {
  return(
    <div className='flex flex-col justify-center py-20 items-center'>
      <div className='text-6xl pb-16'>
          <h1 className='text-black'>COLLECTIONS</h1>
      </div>
      <div className='flex flex-row mx-40 snap-x'> 
        <Carousel/>
      </div>
    </div>  
  )
}

const Map = () => {
  return(
    <div className='flex flex-row py-20 gap-10 w-full justify-center items-center'>
      <div className='p-5'>
        <GoogleMaps/>
      </div>
      <div className='flex flex-col gap-8 w-1/2 text-white'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-6xl'>Where are we located?</h2>
          <p className='text-2xl'>Stall#3 J. Chanyungco St., Marikina City, 1800 Metro Manila, Marikina City, Philippines</p>
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

const LandingPage = () => {
  return (
    <div>
      <div className='bg-hero-img w-full h-auto'>
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <Collections/>
      </div>
      <div className='bg-location-img'>
        <Map/>
      </div>
    </div>
  )
}

export default LandingPage