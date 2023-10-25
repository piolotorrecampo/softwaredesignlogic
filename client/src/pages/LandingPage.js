import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Map from '../components/Map'
import OcassionCard from '../components/OcassionCard'
import FlowerCard from '../components/FlowerCard'
import flowerImage from '../assets/images/flower.png'
import ocassionImage from '../assets/images/ocassion_one.png'

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

  const ocassions = [
    {title: "Love & Romance", image: ""},
    {title: "Boquets", image: ""},
    {title: "Inagurals", image: ""},
    {title: "Condolences", image: ""},
    {title: "Vase", image: ""},
  ]

  const mapped = ocassions.map((ocassion) => (
    <OcassionCard
      title={ocassion.title}
      image={ocassionImage}
    />
  ))

  return(
    <div className='flex flex-col justify-center py-20 items-center'>
      <div className='text-6xl pb-16'>
          <h1 className='text-black'>Collections</h1>
      </div>
      <div className='flex flex-row justify-center items-center flex-wrap mx-4'> 
        {mapped}
      </div>
    </div>  
)}

const Featured = () => {
  return(
    <div className='flex flex-col justify-center py-20 items-center'>
      <div className='text-6xl pb-16'>
        <h1 className='text-black'>Our Flowers</h1>
      </div>
      <div>
      <FlowerCard
        image={flowerImage}
        title="asd"
        price="1900"
        oldPrice="2000"
      />
      </div>
  </div>
)}

const LandingPage = () => {
  return (
    <div>
      <div className='bg-hero-img w-full h-auto'>
        <Header/>
        <Hero/>
      </div>
      <div>
        <Featured/>
      </div>
      <div className='bg-location-img'>
        <Map/>
      </div>
      <div>
        <Collections/>
      </div>
    </div>
  )
}

export default LandingPage