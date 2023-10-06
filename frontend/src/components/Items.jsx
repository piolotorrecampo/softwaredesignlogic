import React, { useEffect, useState } from 'react'

const Items = () => {
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchFlowers = async () => {
      const response = await fetch('http://localhost:4000/api/flowers')
      const json = await response.json()

      if(response.ok){
        setItem(json)
      }
    }

    fetchFlowers()
  }, [])

  useEffect(() => {

  })

  return (
    <div>
      <div>
        {item && item.map((item) => (
          <p key={item._id}>{item.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Items