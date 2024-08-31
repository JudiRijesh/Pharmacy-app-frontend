import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


function HealthCareDetails() {
    const[device,setDevice]=useState(null)
    const {deviceId}=useParams()
    const [quantity,setQuantity] = useState(1)

    const navigate = useNavigate()

    console.log(`${import.meta.env.VITE_BACKEND_URL}/HealthCare/${deviceId}`)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/HealthCare/${deviceId}`)
        .then((oneDevice)=>{
            setDevice(oneDevice.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[deviceId])

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
  
  let submitAddtocart = (e)=>{
    e.preventDefault()

    let data = {
      name: device.name,
      price: device.price,
      size: device.size,
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

  return (
    <div className="device-container">
        {device && (
            <>
                
                <img src ={device.picture} alt={device.name} className='image3'/>
                <div>
                    <h4><span>{device.name}</span></h4>
                    <hr className='device-container hr'/>
                    
                    <h6>CONSUME TYPE</h6>
                    <p>{device["Consume Type"]}</p>
                    <h6>RETURN POLICY</h6>
                    <p>{device["Return Policy"]}</p>
                    <h6>Expires on or after</h6>
                    <p>{device["Expires on or after"]}</p>

                </div>

                <div className="product-container">
  <h6>Price</h6>
  <hr className='medicine-container hr'/>
  <p>€{device.price}</p>
  
      <div className='input-group'>
      <button type='button' onClick={handleDecrement} className="input-group-text">-</button>
      <div className='form-control text-center'>{quantity}</div>
      <button type='button' onClick={handleIncrement} className='input-group-text'>+</button>
      </div>
      <div className='space'>
      <button type="button" className="btn btn-info button-space" onClick={submitAddtocart}>Add to Cart</button>
      </div>
      <p className='return-notice'>**Please read the return policy for HealthCare device details</p>
      </div>
            </>
            
        )}
        </div>
      )
     }


export default HealthCareDetails