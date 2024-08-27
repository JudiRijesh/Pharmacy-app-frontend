import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'

function Cart() {
    const [cartItem, setCartItem] = useState([])
    const [quantity,setQuantity] = useState(1)

    console.log(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart`)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart`)
        .then((oneCartItem)=>{
          setCartItem(oneCartItem.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])

      //Increment
  let handleIncrement = () =>{
    if(quantity<10){
      console.log("ïn incremenet")
      setQuantity(prevCount => prevCount+1)
    }
        }

  //Decrement
  let handleDecrement = () =>{
    if(quantity>1){
      console.log("ïn decremebt")
      setQuantity(prevCount => prevCount-1)
    }
       }

      let handleDelete = (itemId) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart/${itemId}`)
          .then(() => {
          
            setCartItem(cartItem.filter(item => item.id !== itemId));
          })
          .catch((err) => {
            console.error("Error deleting cart item:", err);
          });
      };

  return (
   <div>

          <h5 className='carth5'>Shopping Cart</h5>

      <div className="appointments-container">
      <table className="cart-table">
      <thead>
        <tr className='cart-row'>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
      </thead>
    <tbody>
    {cartItem &&  cartItem.map((oneCartItem, index)=>(
        <tr key={index}>

        <td>{oneCartItem.name}</td>
        <td>{oneCartItem.price}</td>

        <div className='input-group qty-space '>
      <button type='button' onClick={handleDecrement} className="input-group-text">-</button>
      <div className='cart-control'>{oneCartItem.quantity}</div>
      <button type='button' onClick={handleIncrement} className='input-group-text'>+</button>
      </div>    
        <td>{(oneCartItem.price)*(oneCartItem.quantity)}</td>
        <td><button onClick={()=> handleDelete(oneCartItem.id)}>Delete</button></td>
        </tr>
    ))}
       </tbody>
       </table>
       </div>
       </div>
       )
       }

export default Cart