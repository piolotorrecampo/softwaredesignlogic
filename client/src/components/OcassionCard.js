import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function OcassionCard(props) {
  return (
    <Link to="/flowers" >
      <div className='max-w-6xl mx-4 flex flex-col gap-2 justify-center items-center'>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src={props.image}
            alt={props.alt}
          />
        </motion.div>
        <div className='text-black'>
          <p className='text-xl font-semibold'>
            {props.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default OcassionCard