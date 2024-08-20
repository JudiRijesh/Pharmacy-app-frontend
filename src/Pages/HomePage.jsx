import React, { useEffect } from 'react'
import '../App.css'
import pills from '../assets/pills.png'
import doorstep from '../assets/doorstep.png'
import search from '../assets/searchicon.png'
import axios from 'axios'
import { useState } from 'react'

function HomePage() {
  const [items, setItems] =useState([])
  const [searchTerm, setSearchTerm]=useState('')

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/search?q=${searchTerm}`)
    .then((response)=>{
      setItems(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[searchTerm])

  return(

    <div className="homepage-container">
    <img src={pills} alt="pills" className="image1" />
    
    <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <button className="search-button">
          <img src={search} alt="search icon" className="search-icon" />
        </button>
      </div>
    
    <img src={doorstep} alt="doorstep" className="image2" />
  </div>
)
}

export default HomePage