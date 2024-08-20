import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MedicineDetails from '../Pages/MedicineDetails'

function Medicines() {

  const [medicines,setMedicines] =useState([])

  console.log(`${import.meta.env.VITE_BACKEND_URL}`)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/medicines`)
    .then((allMedicines)=>{
      setMedicines(allMedicines.data)
      console.log(allMedicines.data)
    })
    .catch((err)=>{
      console.log((err))})
  },[])
    
  return (
    <div className="medicines-container">
      <h3 className='title'>Medicines</h3>
      <div className="medicines-grid">
        {medicines.map((oneMedicine) => {
          return (
            <Link to={`/medicinedetails/${oneMedicine.id}`}><button className='medicine-button'>
           <div className="medicine-card" key={oneMedicine.id}>
              <img src={oneMedicine.picture} alt={oneMedicine.name} className='image'/>
              <h6 className='text'>{oneMedicine.name}</h6>
            </div>
            </button></Link>
          );
        })}
      </div>
    </div>
  )
}

export default Medicines