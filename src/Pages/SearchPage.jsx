import React, { useState, useEffect } from 'react';
import search from '../assets/searchicon.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MedicinesSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [quantity,setQuantity] = useState(1)

  const navigate = useNavigate()


  useEffect(() => {
    fetchMedicines();
  }, []);


  const fetchMedicines = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/medicines`); 
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };


  const handleSearch = () => {
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMedicines(filtered);
  };

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
  let submitAddToCart =(medicine) =>{


    let data = {
      name: medicine.name,
      price: medicine.price,
      size: medicine.size,
      quantity: quantity,
    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/AddtoCart`,data)
    .then(()=>{
      alert("Item added to Cart")
      navigate('/Cart')})
    .catch((error) => {
      console.error(error);
    })
    }


  return (
    <div>
      <div className='search-container1'>
        <input type="text" className="search-bar"  placeholder="Search medicines" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch} className="search-button"><img src={search} alt="search icon" className="search-icon"/></button>
      </div>
      <h3 className='font-size'>Search Results:</h3>

      <div>
           
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="medicine-container">
            
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
        <button type="button" className="btn btn-info button-space" onClick={() => submitAddToCart(medicine)} >Add to Cart</button>
        </div>
        <p className='return-notice'>**Return Policy: 15 Days Returnable for medicines</p>
        </div>

           
            </div>
            
          ))}
        
      </div>
    </div>
  );
};

export default MedicinesSearch;
