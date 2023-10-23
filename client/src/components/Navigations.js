import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import NavMenuDropdown from './NavMenuDropdown';


const Navigations = () => {
  const [isActive, setIsActive] = useState(false)

  const flowers = [
    "Tulips",
    "Daisy",
    "Rose",
  ]

  const ocassions = [
    "Love and Romance",
    "Inagurals",
    "Funeral",
  ]

  return (
    <nav className='flex justify-center gap-14 text-sm items-center w-full h-9 text-foreground bg-background'>
      <NavLink className={isActive ? 'underline' : ''} onClick={() => setIsActive(true)} to='/'>HOME</NavLink>
      <NavMenuDropdown
        title="FLOWERS"
        items={flowers}
      />
      <NavMenuDropdown
        title="OCASSIONS"
        items={ocassions}
      />
      <NavLink to='/aboutus'>ABOUT US</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
    </nav>
  )
}

export default Navigations