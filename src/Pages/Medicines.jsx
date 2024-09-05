import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Medicines() {

  const [medicines,setMedicines] =useState([])
  const [loading, setLoading] = useState(true)

  console.log(`${import.meta.env.VITE_BACKEND_URL}`)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/medicines`)
    .then((allMedicines)=>{
      setMedicines(allMedicines.data)
      console.log(allMedicines.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log((err))
      setLoading(false)
    })
  },[])
    
  return (
    <div className="medicines-container">
    {loading ? (<p>Loading...</p>) : (
      <div>
      <h3 className='title'>Medicines</h3>
      <div className="medicines-grid">
        {medicines.map((oneMedicine) => {
          return (
            <Link key={oneMedicine.id} to={`/medicinedetails/${oneMedicine.id}`}><button className='medicine-button'>
           <div className="medicine-card" >
              <img src={oneMedicine.picture} alt={oneMedicine.name} className='image'/>
              <h6 className='text'>{oneMedicine.name}</h6>
            </div>
            </button></Link>
          );
        })}
      </div>
      </div>
    )}
     
    </div>
  )
}

export default Medicines