import React from 'react'
import Wellnesspic from '../assets/Wellnesspic.png'
import { Link } from 'react-router-dom'


function Wellness() {
  return (
    <div className="wellness-container">

        <h4>What is Medical Wellness?</h4>
       

        <div className="first-paragraph">
        <img src={Wellnesspic} alt="Wellnesspic" className="image2a" />
        <p>The term ‘wellness’ isn’t a new concept to the healthcare industry, although people used to have a much narrower perspective on what it encompassed. Today, people are much more aware of the benefits of wellness and how this can be incorporated into their everyday lives to enhance their own health. </p>
        </div>

        <h4>What is the definition of Medical Wellness?</h4>
        <p>Medical Wellness is the practice of creating a holistic approach to health and optimising patient’s well-being through nutrition, exercise, mindfulness and sleep. It’s about creating a tailored health programme that focuses on long-term wellness to create a balanced life to prevent and treat diseases/illnesses. 
        The World Health Organization defines health as: “A state of optimal well-being, not merely the absence of disease and infirmity.” 
        As people become more aware of their health and look to programmes that enhance their overall lifestyle, we’re starting to see more aesthetic clinics offer treatments that incorporate a holistic approach for their patients. </p>

        <h4>Medical Wellness in the aesthetics industry</h4>
        <p>With people turning to aesthetic treatments to help them feel like their best self, there is a huge opportunity for the aesthetic industry to be at the forefront of Medical Wellness services, treatments and education. 
        We know from our previous research in our blog, “Medical Wellness: An emerging trend in the aesthetics industry”, that 70% of women (with a household income of over £50,000) are interested in a more holistic service from their healthcare provider and trained aesthetic practitioners are best placed to start serving this need. 
        In order to help people feel good on the outside, clinicians need to think about how they can help promote a healthy inside through a range of factors, such as diet, exercise and mental wellbeing.</p>

        <h4>What treatments are included in Medical Wellness?</h4>
        <p>When thinking about Medical Wellness treatments, it can often be mistaken for ‘traditional’ wellness services often found at spas, such as massages, facials and relaxation treatments. 
        However, Medical Wellness treatment services include supplements, vitamin injections and medicated weight management (used correctly for the right person), which can all help promote a healthier lifestyle.</p>

        <Link to = {`/servicesform`}><button className='submit-buttonW'>Find out more about our Private HealthCare services</button></Link> 

        <p className='notice'>***Find out more about our data and insights services by emailing us at hallo@care.consulting or calling us on 060 5643 6237.</p>

     
    </div>
  )
}

export default Wellness