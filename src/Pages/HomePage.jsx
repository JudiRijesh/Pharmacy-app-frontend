import React, { useEffect } from 'react'
import '../App.css'
import pills from '../assets/pills.png'
import doorstep from '../assets/doorstep.png'
import search from '../assets/searchicon.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  

  const [searchTerm, setSearchTerm]=useState('')
  
  return(

    <div className="page-container">
      <div className="content-wrap">
        <div className="homepage-container">
          <img src={pills} alt="pills" className="image1" />

          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="To search for your medicines click the search icon"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <button className="search-button">
              <Link to={`/search`}>
                <img src={search} alt="search icon" className="search-icon" />
              </Link>
            </button>
          </div>

          <img src={doorstep} alt="doorstep" className="image2" />
        </div>
      </div>
    
      <footer className="footer-home">
  <div className="footer-contenthome">
    <div className="footer-left">
      <h5>About MAD Pharmacy</h5>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/book-lab-tests">Book Lab Tests at Home</Link></li>
        <li><Link to="/categories">Product Categories</Link></li>
      </ul>
    </div>
    <div className="footer-right">
      <h6>Find us on</h6>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" className="imagehp" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="imagehp" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="imagehp" />
      </a>
    </div>
  </div>
</footer>

  </div>



  )
}

export default HomePage