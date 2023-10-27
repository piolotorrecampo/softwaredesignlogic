import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
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
      <NavLink to='/'>HOME</NavLink>
      <NavMenuDropdown
        title="FLOWERS"
        items={flowers}
      />
      <NavMenuDropdown
        title="OCASSIONS"
        items={ocassions}
      />
      <NavLink to='/ai-finder'>AI-FINDER</NavLink>
      <NavLink to='/aboutus'>ABOUT US</NavLink>
      <NavLink to='/contact'>CONTACT</NavLink>
      <NavLink to='/flower-details'>DETAILS</NavLink>
    </nav>
  )
}

export default Navbar

const NavMenuDropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const items = props.items;

  return (
    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className="relative group">
      <NavLink href="/services" className="text-white">{props.title}</NavLink>
      <AnimatePresence>
        {isDropdownOpen && 
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-2 py-2 bg-white text-black border rounded-lg space-y-2 group-hover:block"
          >
            {items.map((items) => <Link to="/flowers" className="block px-4 py-2">{items}</Link>)}
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}