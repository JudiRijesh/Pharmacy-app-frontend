import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Appointments() {

    const [appointments,setAppointments] =useState([])


     
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/labtests`)
      .then((response)=>{
        setAppointments(response.data)
        console.log(response.data)
      })
      .catch((err)=>{
        console.log((err))})
    },[])

    let handleDelete = (itemId) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/labtests/${itemId}`)
          .then(() => {
          
            setAppointments(appointments.filter(item => item.id !== itemId));
          })
          .catch((err) => {
            console.error("Error deleting appointment:", err);
          });
      };

  return (
    <div>
      <h5 className='appointment-title'>Appointments List</h5>
      <div className="appointments-container">
        <div className="titles-row">
            <h6>Patient Name</h6>
            <h6>Contact Number</h6>
            <h6>D.O.B</h6>
            <h6>Priority</h6>
            <h6>Test</h6>
            <h6>Time Slot</h6>
            <h6>Actions</h6> 
        </div>

            {appointments.map((oneAppointment) => (
            <div key={oneAppointment.id} className="appointment-item">
                <p>{oneAppointment.patientName}</p>
                <p>{oneAppointment.phoneNumber}</p>
                <p>{oneAppointment.dateOfBirth}</p>
                <p>{oneAppointment.priority}</p>
                <p>{oneAppointment.test}</p>
                <p>{oneAppointment.slot}</p>
                <button onClick={()=> handleDelete(oneAppointment.id)} className="del-edit">Delete</button>
                <Link className="del-edit" to= {`/edit/${oneAppointment.id}`}>Edit</Link>
            </div>
    ))}
  </div>
</div>
  );
}
export default Appointments