import React from 'react'
import { useState } from 'react'

const FlowerForm = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleSumbit = async (e) => {
    e.preventDefault()

    const flower = {title, category, price, description}
    console.log(flower)

    const response = await fetch('http://localhost:4000/api/flowers', {
      method: 'POST',
      body: JSON.stringify(flower),
      headers: {
        'Content-Type': 'application/json'
      }
    }) 

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setTitle('')
      setPrice('')
      setCategory('')
      setDescription('')
      setError(null)
      console.log("New flower added.", json)
    }
  }

  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label type="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" onChange={(e) => {setTitle(e.target.value)}} value={title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" onChange={(e) => {setPrice(e.target.value)}} value={price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select onChange={(e) => {setCategory(e.target.value)}} value={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option value="">Select category</option>
                      <option value="love">Love</option>
                      <option value="inagural">Inagural</option>
                      <option value="funeral">Funeral</option>
                  </select>
              </div> 
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea rows="3" onChange={(e) => {setDescription(e.target.value)}} value={description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="button" onClick={handleSumbit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Product</button>
      </form>
    </div>
  )
}

export default FlowerForm