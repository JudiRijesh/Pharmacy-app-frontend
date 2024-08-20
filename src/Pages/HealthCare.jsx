import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HealthCareDetails from './HealthCareDetails'

function HealthCare() {
  const [devices, setDevices]=useState([])

  console.log(`${import.meta.env.VITE_BACKEND_URL}`)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/HealthCare`)
    .then((allDevices)=>{
      setDevices(allDevices.data)
      console.log(allDevices.data)
    })
    .catch((err)=>{
      console.log((err))    
    })
  },[])

  return (
    <div>
          <p className='healthcare'>The World Health Organization in 1948 broadly defined wellness as "not merely the absence of disease and infirmity" but an overall sense of well-being.</p>
          <div className="medicines-container">
          
      <div className="medicines-grid">
  {devices.map((oneDevice, index) => (
    <div key={index} className="device-card">
    <Link to={`/healthcareDetails/${oneDevice.id}`}><button className='medicine-button'>
      <img src={oneDevice.picture} alt={oneDevice.name} className='imageH' />
      <h6 className='textH'>{oneDevice.name}</h6>
      </button></Link>
    </div>
  ))}
    </div>
 </div>
    </div>
  )
}

export default HealthCare