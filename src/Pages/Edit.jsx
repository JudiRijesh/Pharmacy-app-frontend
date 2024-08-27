import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ExpressLab from '../assets/ExpressLab.png'
import info from '../assets/info.png'
import { useNavigate } from 'react-router-dom'

function Edit() {

    const {id} = useParams()
    const [patientName, setPatientName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null) 
    const [emailId, setEmailId] =useState(null)
    const [location,setLocation] = useState(null)
    const [dateOfBirth, setDateOfBirth ] = useState(null)
    const [gender,setGender] = useState(null)
    const [priority, setPriority] = useState(null)
    const [referringDoctor , setReferringDoctor] = useState(null)
    const [test, setTest] = useState(null)
    const [timeslot, setTimeSlot] = useState(null)
       
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/labtests/${id}`)
        .then((response)=>{
            setPatientName(response.data.patientName)
            setPhoneNumber(response.data.phoneNumber)
            setEmailId(response.data.emailId)
            setLocation(response.data.location)
            setDateOfBirth(response.data.dateOfBirth)
            setGender(response.data.gender)
            setPriority(response.data.priority)
            setReferringDoctor(response.data.referringDoctor)
            setTest(response.data.test)
            setTimeSlot(response.data.timeslot)
          })
        .catch((err)=>{
            console.log((err))})
    },[])

    function handleUpdate(e){
        e.preventDefault()
  
  
    let newLabTest = {patientName: patientName, phoneNumber: phoneNumber, emailId: emailId, location: location, dateOfBirth: dateOfBirth, gender:gender, priority:priority, referringDoctor:referringDoctor, test:test, slot:timeslot}
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/labtests/${id}`, newLabTest)
    .then(()=>{
      alert("Your appointment for Labtest has been Changed")
      navigate('/appointments') })
      .catch((err)=>{
        console.log(err)
      })
    }
  

  return (
    <div>
    <img src={info} alt="info" className='info' />
    <img src={ExpressLab} alt="ExpressLab" className="express-image" />
    <div className='lab-test-container'>
    <form onSubmit={handleUpdate} className='lasb-test-form'>

       <div className='form-group'>
       <label>
          Patient Name:
          <input value = {patientName} type="text" onChange={(e)=>{setPatientName(e.target.value)}}/>
          </label> 
        </div>
       

        <div className='form-group'>
        <label>
          Contact Number:
          <input value = {phoneNumber} type="tel" placeholder="+61 (0) 555-555555" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        </label> 
        </div>

        <div className='form-group'>
        <label>
          Email Id:
          <input value={emailId} type="text" onChange={(e)=>{setEmailId(e.target.value)}}/>
          <div className='email-notice'>
          </div>
        </label> 
        </div>


        <div className='form-group'>
        <label>
          Location:
          <input value={location} type="text" onChange={(e)=>{setLocation(e.target.value)}}/>
        </label>
        </div>


       <div className='form-group'>
        <label>
          D.O.B:
          <input value={dateOfBirth} type="date" onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
          Gender:
          <select onChange={(e) => setGender(e.target.value)} className="form-control">
          <option value="">Select Gender</option> 
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to disclose">Prefer not to disclose</option>
         </select>
        </label>
        </div>

        <div className='form-group'>
        <label>
        Priority:
          <select onChange={(e) => setPriority(e.target.value)} className="form-control">
          <option value="">Priority</option> {/* Placeholder option */}
          <option value="Immediate">Immediate</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
         </select>
        </label>
        </div>

        <div className='form-group'>
        <label>
          Referring Doctor:
          <input value={referringDoctor} type="text" onChange={(e)=>{setReferringDoctor(e.target.value)}}/>
        </label>
        </div>

       <div className='form-group'>
        <label>
          Lab-Test Name:
          <select onChange={(e) => setTest(e.target.value)} className="form-control">
            <option value="">Select Lab Test</option>
            <option value="CBC Test">CBC Test</option>
            <option value="CRP Test">CRP Test</option>
            <option value="RT PCR Test">RT PCR Test</option>
            <option value="RBC Test">RBC Test</option>
            <option value="ABC Test">ABC Test</option>
            <option value="AMC Test">AMC Test</option>
            <option value="Absolute Eosinophil Count Test">Absolute Eosinophil Count Test</option>
            <option value="Platelet Count Test">Platelet Count Test</option>
            <option value="ALC Test">ALC Test</option>
            <option value="Absolute Polymorphs Test">Absolute Polymorphs Test</option>
            <option value="MCHC Blood Test">MCHC Blood Test</option>
            <option value="MCH Blood Test">MCH Blood Test</option>
            <option value="MCV Blood Test">MCV Blood Test</option>
            <option value="MPV Blood Test">MPV Blood Test</option>
            <option value="HCT Blood Test">HCT Blood Test</option>
            <option value="TSH Test">TSH Test</option>
            <option value="Thyroid Antibodies Test">Thyroid Antibodies Test</option>
            <option value="Thyroid Panel Test">Thyroid Panel Test</option>
            <option value="Hemoglobin Blood Test">Hemoglobin Blood Test</option>
            <option value="Lipid Profile Test">Lipid Profile Test</option>
            <option value="HbA1c Test">HbA1c Test</option>
            <option value="PDW Blood Test">PDW Blood Test</option>
            <option value="Vitamin B12 Test">Vitamin B12 Test</option>
            <option value="ESR Test">ESR Test</option>
            <option value="LFT Test">LFT Test</option>
            <option value="RBS Test">RBS Test</option>
            <option value="Ferritin Test">Ferritin Test</option>
            <option value="FNAC Test">FNAC Test</option>
            <option value="VDRL Test">VDRL Test</option>
            <option value="Triple Marker Test">Triple Marker Test</option>
            <option value="Double Marker Test">Double Marker Test</option>
            <option value="Widal Test">Widal Test</option>
            <option value="Semen Analysis Test">Semen Analysis Test</option>
            <option value="Vitamin K Test">Vitamin K Test</option>
            <option value="Troponin Test">Troponin Test</option>
            <option value="Mantoux Test">Mantoux Test</option>
            <option value="Typhidot Test">Typhidot Test</option>
            <option value="Vitamin D Test">Vitamin D Test</option>
            <option value="Prolactin Test">Prolactin Test</option>
            <option value="Beta hCG Test">Beta hCG Test</option>
            <option value="FBS Test">FBS Test</option>
            <option value="Creatine Kinase Test">Creatine Kinase Test</option>
            <option value="WBC Blood Test">WBC Blood Test</option>
            <option value="RAST Test">RAST Test</option>
            <option value="Dengue Test">Dengue Test</option>
            <option value="KFT Test">KFT Test</option>
            <option value="Urine Culture Test">Urine Culture Test</option>
            <option value="HDL Cholesterol Test">HDL Cholesterol Test</option>
            <option value="LDL Cholesterol Test">LDL Cholesterol Test</option>
            <option value="VLDL Cholesterol Test">VLDL Cholesterol Test</option>
            <option value="C Peptide Test">C Peptide Test</option>
            <option value="Dengue IgM Test">Dengue IgM Test</option>
            <option value="Dengue IgG Test">Dengue IgG Test</option>
            <option value="Dengue Ns1 Antigen Test">Dengue Ns1 Antigen Test</option>
            <option value="Bilirubin Test">Bilirubin Test</option>
            <option value="Troponin I Test">Troponin I Test</option>
            <option value="Troponin T Test">Troponin T Test</option>
            <option value="Peripheral Blood Smear Test">Peripheral Blood Smear Test</option>
            <option value="Pap Smear Test">Pap Smear Test</option>
            <option value="Karyotyping Test">Karyotyping Test</option>
            <option value="HIV Test">HIV Test</option>
            <option value="Cortisol Test">Cortisol Test</option>
            <option value="Potassium Blood Test">Potassium Blood Test</option>
            <option value="Stool Culture Test">Stool Culture Test</option>
            <option value="Stool Occult Blood Test">Stool Occult Blood Test</option>
            <option value="CA 125 Test">CA 125 Test</option>
            <option value="Testosterone Test">Testosterone Test</option>
            <option value="PPBS Test">PPBS Test</option>
            <option value="CA 15-3 Test">CA 15-3 Test</option>
            <option value="Vitamin B9 Test">Vitamin B9 Test</option>
            <option value="CA 19-9 Test">CA 19-9 Test</option>
            <option value="Vitamin C Test">Vitamin C Test</option>
            <option value="Aldolase Test">Aldolase Test</option>
            <option value="AFP Test">AFP Test</option>
            <option value="Urine Cotinine Test">Urine Cotinine Test</option>
            <option value="BUN Test">BUN Test</option>
            <option value="Serum Calcium Test">Serum Calcium Test</option>
            <option value="Serum Potassium Test">Serum Potassium Test</option>
            <option value="CMP Blood Test">CMP Blood Test</option>
            <option value="T3 Test">T3 Test</option>
            <option value="T4 Test">T4 Test</option>
            <option value="UPCR Test">UPCR Test</option>
            <option value="Serum Electrolytes Test">Serum Electrolytes Test</option>
            <option value="Progesterone Test">Progesterone Test</option>
            <option value="BMD Test">BMD Test</option>
            <option value="Magnesium Test">Magnesium Test</option>
            <option value="Albumin Test">Albumin Test</option>
            <option value="Lactic Acid Test">Lactic Acid Test</option>
            <option value="Gonorrhea Test">Gonorrhea Test</option>
            <option value="Calcitonin Test">Calcitonin Test</option>
            <option value="Globulin Test">Globulin Test</option>
            <option value="AST Test">AST Test</option>
            <option value="TIBC Test">TIBC Test</option>
            <option value="Serum Iron Test">Serum Iron Test</option>
            <option value="Haptoglobin Test">Haptoglobin Test</option>
            <option value="HER2 Test">HER2 Test</option>
            <option value="Prealbumin Blood Test">Prealbumin Blood Test</option>
            <option value="Reticulocyte Count Test">Reticulocyte Count Test</option>
            <option value="Fibrinogen Test">Fibrinogen Test</option>
            <option value="Digoxin Test">Digoxin Test</option>
            <option value="FSH Test">FSH Test</option>
            <option value="LH Test">LH Test</option>
            <option value="Arthritis Profile Test">Arthritis Profile Test</option>
            <option value="Torch Profile Test">Torch Profile Test</option>
            <option value="Coagulation Profile Test">Coagulation Profile Test</option>
            <option value="DLC Test">DLC Test</option>
            <option value="Brain MRI">Brain MRI</option>
            <option value="Brain CT Scan">Brain CT Scan</option>
            <option value="Beta-Hydroxybutyrate Test">Beta-Hydroxybutyrate Test</option>
            <option value="IgA Test">IgA Test</option>
            <option value="IgM Test">IgM Test</option>
            <option value="IgE Test">IgE Test</option>
            <option value="IgG Test">IgG Test</option>
            <option value="KOH Test">KOH Test</option>
            <option value="Estradiol Test">Estradiol Test</option>
            <option value="DHEA Sulfate Test">DHEA Sulfate Test</option>
            <option value="DHEA Test">DHEA Test</option>
            <option value="Sodium Blood Test">Sodium Blood Test</option>
            <option value="Phosphorus Blood Test">Phosphorus Blood Test</option>
            <option value="Chloride Blood Test">Chloride Blood Test</option>
            <option value="Anti CCP Test">Anti CCP Test</option>
            <option value="GGT Blood Test">GGT Blood Test</option>
            <option value="Amylase Test">Amylase Test</option>
            <option value="Lipase Test">Lipase Test</option>
            <option value="Ionized Calcium Test">Ionized Calcium Test</option>
            <option value="ALP Test">ALP Test</option>
            <option value="ASO Test">ASO Test</option>
            <option value="Creatinine Test">Creatinine Test</option>
            <option value="Rheumatoid Factor Test">Rheumatoid Factor Test</option>
            <option value="Uric Acid Test">Uric Acid Test</option>
            <option value="ALT Test">ALT Test</option>
            <option value="D-Dimer Test">D-Dimer Test</option>
            <option value="Hepatitis C Virus Test">Hepatitis C Virus Test</option>
            <option value="Hepatitis A Antibody IgM Test">Hepatitis A Antibody IgM Test</option>
            <option value="Hepatitis A Antibody IgG Test">Hepatitis A Antibody IgG Test</option>
            <option value="Hepatitis B Surface Antibody Test">Hepatitis B Surface Antibody Test</option>
            <option value="Hepatitis B Surface Antigen Test">Hepatitis B Surface Antigen Test</option>
            <option value="HBsAg Quantitative Test">HBsAg Quantitative Test</option>
            <option value="Hepatitis B Core Antibody Test">Hepatitis B Core Antibody Test</option>
            <option value="Hepatitis B Profile Test">Hepatitis B Profile Test</option>
            <option value="Urine Glucose Test">Urine Glucose Test</option>
            <option value="DNPH Test">DNPH Test</option>
            <option value="MDMA Screen Urine Test">MDMA Screen Urine Test</option>
            <option value="Blood Group Test">Blood Group Test</option>
            <option value="Malaria Parasite Identification Test">Malaria Parasite Identification Test</option>
            <option value="G6PD Test">G6PD Test</option>
            <option value="APTT Test">APTT Test</option>
            <option value="Prothrombin Time Test">Prothrombin Time Test</option>
            <option value="Creatinine 24 Hour Urine Test">Creatinine 24 Hour Urine Test</option>
            <option value="X Rays">X Rays</option>
            <option value="PET Scan">PET Scan</option>
            <option value="Angiography">Angiography</option>
            <option value="Fluoroscopy">Fluoroscopy</option>
            <option value="Nuclear Medicine Imaging">Nuclear Medicine Imaging</option>
            <option value="Mammography">Mammography</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Mycobacterial Culture Test">Mycobacterial Culture Test</option>
            <option value="Mycobacterium Combined Panel Test">Mycobacterium Combined Panel Test</option>
            <option value="Sputum AFB Test">Sputum AFB Test</option>
            <option value="Gram Stain Bacterial Vaginosis Test">Gram Stain Bacterial Vaginosis Test</option>
            <option value="Gram Stain Test">Gram Stain Test</option>
            <option value="Arterial Blood Gas Test">Arterial Blood Gas Test</option>
            <option value="Indirect Bilirubin Test">Indirect Bilirubin Test</option>
            <option value="Coombs Test">Coombs Test</option>
            <option value="Colonoscopy with Polypectomy Biopsy Test">Colonoscopy with Polypectomy Biopsy Test</option>
            <option value="Prostate Biopsy Test">Prostate Biopsy Test</option>
            <option value="Liver Biopsy">Liver Biopsy</option>
            <option value="Cervix Biopsy Test">Cervix Biopsy Test</option>
            <option value="Skin Biopsy Test">Skin Biopsy Test</option>
            <option value="17 Hydroxyprogesterone Test">17 Hydroxyprogesterone Test</option>
            <option value="ELISA Test">ELISA Test</option>
            <option value="Galactosemia Test">Galactosemia Test</option>
            <option value="Immunofixation Test">Immunofixation Test</option>
            <option value="LDH Test">LDH Test</option>
            <option value="PSA Test">PSA Test</option>
            <option value="ACTH Stimulation Test">ACTH Stimulation Test</option>
            <option value="Anti Mullerian Hormone Test">Anti Mullerian Hormone Test</option>
            <option value="Antinuclear Antibody Test">Antinuclear Antibody Test</option>
            <option value="Blood Culture Test">Blood Culture Test</option>
            <option value="Chlamydia Test">Chlamydia Test</option>
            <option value="Direct Antiglobulin Test">Direct Antiglobulin Test</option>
            <option value="Hair Follicle Drug Test">Hair Follicle Drug Test</option>
            <option value="Glucose Tolerance Test">Glucose Tolerance Test</option>
            <option value="Homocysteine Test">Homocysteine Test</option>
            <option value="Paternity Test">Paternity Test</option>
            <option value="Procalcitonin Test">Procalcitonin Test</option>
            <option value="Allergy Skin Test">Allergy Skin Test</option>
            <option value="Strep Throat Test">Strep Throat Test</option>
            <option value="Syphilis Test">Syphilis Test</option>
            <option value="Urine Drug Test">Urine Drug Test</option>
            <option value="Adenosine Deaminase Test">Adenosine Deaminase Test</option>
            <option value="Alcohol Blood Test">Alcohol Blood Test</option>
            <option value="Ammonia Test">Ammonia Test</option>
            <option value="AAT Test">AAT Test</option>
            <option value="Anti-dsDNA Test">Anti-dsDNA Test</option>
            <option value="Antibody Titer Test">Antibody Titer Test</option>
            <option value="Apo B Test">Apo B Test</option>
            <option value="Blood Ketones Test">Blood Ketones Test</option>
            <option value="Cardiolipin Antibodies Test">Cardiolipin Antibodies Test</option>
            <option value="Copper Test">Copper Test</option>
            <option value="Covid 19 Antibody Test">Covid 19 Antibody Test</option>
            <option value="Covid 19 Antigen Test">Covid 19 Antigen Test</option>
            <option value="Cholinesterase Test">Cholinesterase Test</option>
            <option value="Chromogranin A Test">Chromogranin A Test</option>
            <option value="Calprotectin Test">Calprotectin Test</option>
            <option value="Catecholamines Test">Catecholamines Test</option>
            <option value="Ceruloplasmin Test">Ceruloplasmin Test</option>
            <option value="Complement Test">Complement Test</option>
            <option value="Cryoglobulins Test">Cryoglobulins Test</option>
            <option value="Cystatin C Test">Cystatin C Test</option>
            <option value="Fecal Fat Test">Fecal Fat Test</option>
            <option value="FIT Test">FIT Test</option>
            <option value="Fetal Fibronectin Test">Fetal Fibronectin Test</option>
            <option value="Folate Blood Test">Folate Blood Test</option>
            <option value="Fructosamine Test">Fructosamine Test</option>
            <option value="Growth Hormone Test">Growth Hormone Test</option>
            <option value="Heavy Metals Test">Heavy Metals Test</option>
            <option value="Histamine Test">Histamine Test</option>
            <option value="HIV Viral Load Test">HIV Viral Load Test</option>
            <option value="IGRA TB Test">IGRA TB Test</option>
            <option value="Insulin Test">Insulin Test</option>
            <option value="Lactate Test">Lactate Test</option>
            <option value="Lead Test">Lead Test</option>
            <option value="Lipoprotein-A Test">Lipoprotein-A Test</option>
            <option value="Plasma Free Metanephrines">Plasma Free Metanephrines</option>
            <option value="Urine Metanephrines">Urine Metanephrines</option>
            </select>
        </label>
        </div>

        <div className='form-group'>
        <label>
          Choose a Time Slot:
          <select onChange={(e) => setSlot(e.target.value)} className="form-control">
          <option value="">Choose a slot for appointment</option>
          <option value="06:00 - 06:15">06:00 - 06:15</option>
          <option value="06:15 - 06:30">06:15 - 06:30</option>
          <option value="06:30 - 06:45">06:30 - 06:45</option>
          <option value="06:45 - 07:00">06:45 - 07:00</option>
          <option value="07:00 - 07:15">07:00 - 07:15</option>
          <option value="07:15 - 07:30">07:15 - 07:30</option>
          <option value="07:30 - 07:45">07:30 - 07:45</option>
          <option value="07:45 - 08:00">07:45 - 08:00</option>
          <option value="08:00 - 08:15">08:00 - 08:15</option>
          <option value="08:15 - 08:30">08:15 - 08:30</option>
          <option value="08:30 - 08:45">08:30 - 08:45</option>
          <option value="08:45 - 09:00">08:45 - 09:00</option>
          <option value="09:00 - 09:15">09:00 - 09:15</option>
          <option value="09:15 - 09:30">09:15 - 09:30</option>
          <option value="09:30 - 09:45">09:30 - 09:45</option>
          <option value="09:45 - 10:00">09:45 - 10:00</option>
          <option value="10:00 - 10:15">10:00 - 10:15</option>
          <option value="10:15 - 10:30">10:15 - 10:30</option>
          <option value="10:30 - 10:45">10:30 - 10:45</option>
          <option value="10:45 - 11:00">10:45 - 11:00</option>
          <option value="11:00 - 11:15">11:00 - 11:15</option>
          <option value="11:15 - 11:30">11:15 - 11:30</option>
          <option value="11:30 - 11:45">11:30 - 11:45</option>
          <option value="11:45 - 12:00">11:45 - 12:00</option>
          <option value="12:00 - 12:15">12:00 - 12:15</option>
          <option value="12:15 - 12:30">12:15 - 12:30</option>
          <option value="12:30 - 12:45">12:30 - 12:45</option>
          <option value="12:45 - 13:00">12:45 - 13:00</option>
          <option value="Lunch Break - Lab closed">Lunch Break - Lab closed</option>
          <option value="14:00 - 14:15">14:00 - 14:15</option>
          <option value="14:15 - 14:30">14:15 - 14:30</option>
          <option value="14:30 - 14:45">14:30 - 14:45</option>
          <option value="14:45 - 15:00">14:45 - 15:00</option>
          <option value="15:00 - 15:15">15:00 - 15:15</option>
          <option value="15:15 - 15:30">15:15 - 15:30</option>
          <option value="15:30 - 15:45">15:30 - 15:45</option>
          <option value="15:45 - 16:00">15:45 - 16:00</option>
          <option value="Break - Lab Closed">Break - Lab Closed</option>
          <option value="16:30 - 16:45">16:30 - 16:45</option>
          <option value="16:45 - 17:00">16:45 - 17:00</option>
          <option value="17:00 - 17:15">17:00 - 17:15</option>
          <option value="17:15 - 17:30">17:15 - 17:30</option>
          <option value="17:30 - 17:45">17:30 - 17:45</option>
          <option value="17:45 - 18:00">17:45 - 18:00</option>
          <option value="18:00 - 18:15">18:00 - 18:15</option>
          <option value="18:15 - 18:30">18:15 - 18:30</option>
          <option value="18:30 - 18:45">18:30 - 18:45</option>
          <option value="18:45 - 19:00">18:45 - 19:00</option>
          <option value="19:00 - 19:15">19:00 - 19:15</option>
          <option value="19:15 - 19:30">19:15 - 19:30</option>
          <option value="19:30 - 19:45">19:30 - 19:45</option>
          <option value="19:45 - 20:00">19:45 - 20:00</option>
          <option value="20:00 - 20:15">20:00 - 20:15</option>
          <option value="20:15 - 20:30">20:15 - 20:30</option>
          <option value="20:30 - 20:45">20:30 - 20:45</option>
          <option value="20:45 - 21:00">20:45 - 21:00</option>

        </select>
        </label>
        </div>

        <button type='submit' className='submit-button'>Update</button>


   
    </form>
    </div>
    </div>


    )
  }

export default Edit