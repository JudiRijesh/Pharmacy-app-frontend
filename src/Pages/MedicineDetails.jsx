import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function Medicineinfo() {
  const [medicine,setMedicine] = useState(null)
  const {medicineId}=useParams()
  const [quantity,setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)


  const navigate = useNavigate()

  console.log(`${import.meta.env.VITE_BACKEND_URL}/medicines/${medicineId}`)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/medicines/${medicineId}`)
    .then((oneMedicine)=>{
      setMedicine(oneMedicine.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[medicineId])

  //Increment
  let handleIncrement = () =>{
    if(quantity<10){
      setQuantity(prevCount => prevCount+1)
    }
        }

  //Decrement
  let handleDecrement = () =>{
    if(quantity>1){
      setQuantity(prevCount => prevCount-1)
    }
       }

  //Add to Cart
  let submitAddtocart = (e) =>{
    e.preventDefault()

     let data = {
      name: medicine.name,
      price: medicine.price,
      size: medicine.size,
      quantity: quantity
    }
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart`,data)
      .then(()=>{
       alert("Item added to Cart")
      navigate('/Cart')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

    if (loading) {
    return <div>Loading...</div>;
  }

    if (!medicine) {
    return <div>Error: Medicine not found.</div>;
  }

    return (
    <div className="medicine-container">
    {medicine && (
      <>
        <img src={medicine.picture} alt={medicine.name} className="image3" />
        <div>
          <h4>{medicine.name}</h4>
          <hr className='medicine-container hr'/>
          <p>Selected Pack Size: {medicine.size}</p>
           <h6>Composition</h6>
          <p>{medicine.composition}</p>
          <h6>Manufacturer</h6>
          <p>{medicine.manufacturer}</p>
          <h6>Manufacture Date</h6>
          <p>{medicine.mfd}</p>
          <h6>Expires on</h6>
          <p>{medicine.expiry}</p>
        </div>

        <div className="product-container">
  <h6>Price</h6>
  <hr className='medicine-container hr'/>
  <p>€{medicine.price}</p>
  
      <div className='input-group'>
      <button type='button' onClick={handleDecrement} className="input-group-text">-</button>
      <div className='form-control text-center'>{quantity}</div>
      <button type='button' onClick={handleIncrement} className='input-group-text'>+</button>
      </div>
      <div className='space'>
      <button type="button" className="btn btn-info button-space" onClick={submitAddtocart}>Add to Cart</button>
      </div>
      <p className='return-notice'>**Return Policy: 15 Days Returnable for medicines</p>
      </div>

      </>
    )}
  </div>
    )}
  
export default Medicineinfo