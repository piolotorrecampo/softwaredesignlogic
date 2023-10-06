import React from 'react'
import Items from '../components/Items'
import Products from '../admin/pages/Products'

const LandingPage = () => {
  return (
    <div className='text-3xl font-bold underline'>
      <div>
        <Items/>
        <Products/>
      </div>
    </div>
  )
}

export default LandingPage
