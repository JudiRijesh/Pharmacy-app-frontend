import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Care from '../assets/Care.png'

function ServicesForm() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = ("")
    const [email, setEmail] = ("")
    const [companyName, setCompanyName] = ("")
    const [subject, setSubject] = ("")
    const [WhatsOnMind, setWhatsOnMind] = ("")

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

    let newServicesForm = {firstName: firstName, lastName: lastName, email:email, companyName: companyName, subject:subject, WhatsOnMind:WhatsOnMind}
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/labtests`, newServicesForm)
    .then(()=>{
        alert("We will contact you regarding your request ASAP")
        navigate('/') })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>

        <h2 className='centralize'>Can we help you ?</h2>
        <h5 className='centralize1'>Would you like to find out more about how we could work together? We’d love to hear from you.</h5>

        <div className='lab-test-container'>

        <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>
            First Name
                <input type='text' onChange={(e)=>{setFirstName(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
            Last Name
                <input type='text' onChange={(e)=>{setLastName(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
            Email
                <input type='text' onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
            Company Name
                <input type='text' onChange={(e)=>{setCompanyName(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
            Subject
                <input type='text' onChange={(e)=>{setSubject(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
            What's on your Mind
            <textarea  className='form-textarea' onChange={(e) => { setWhatsOnMind(e.target.value); }}/>
        </label>
        </div>

        <button type='submit' className='service-button'>Submit</button>

        
        </form>
    </div>
    
 
  <footer className='footer'>
  <div className='footer-section'>
    <h6>General Enquiry</h6>
    <p>hallo@care.consulting</p>
    <p>+31 (0) 651386344</p>
  </div>
  <div className='footer-section'>
    <h6>Speaking and Press Opportunities</h6>
    <p>hallo@care.consulting</p>
  </div>
  <div className='footer-section'>
    <h6>Find Us</h6>
    <p>25-27 Raadhuisplein</p>
    <p>2154 BZ</p>
    <p>Noord-Holland</p>
  </div>
</footer>
</div>
)
}

export default ServicesForm