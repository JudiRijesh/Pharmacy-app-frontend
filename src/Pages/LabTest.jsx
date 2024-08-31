import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ExpressLab from '../assets/ExpressLab.png'
import info from '../assets/info.png'

function LabTest() {
  const [patientName, setPatientName] = useState("")
  const [phoneNumber, SetPhoneNumber] = useState("")
  const [emailId, setEmailId] = useState("")
  const [location,setLocation] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [gender,setGender] = useState("")
  const [priority, setPriority] = useState("")
  const [referringDoctor , setReferringDoctor] = useState("")
  const [test, setTest] = useState("")
  const [slot, setSlot] = useState("")

  
  const navigate = useNavigate()

  function handleSubmit(e){
      e.preventDefault()


  let newLabTest = {patientName: patientName, phoneNumber: phoneNumber, emailId: emailId, location: location, dateOfBirth: dateOfBirth, gender:gender, priority:priority, referringDoctor:referringDoctor, test:test, slot:slot}
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/labtests`, newLabTest)
  .then(()=>{
    alert("Your appointment for Labtest has been created")
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
    <form onSubmit={handleSubmit} >
      <div className='form-group'>
        <label>
          Patient Name:
          <input type="text" onChange={(e)=>{setPatientName(e.target.value)}}/>
        </label> 
        </div>

        <div className='form-group'>
        <label>
          Contact Number:
          <input type="tel" placeholder="+61 (0) 555-555555" onChange={(e)=>{SetPhoneNumber(e.target.value)}}/>
        </label> 
        </div>

        <div className='form-group'>
        <label>
          Email Id:
          <input type="text" onChange={(e)=>{setEmailId(e.target.value)}}/>
          <div className='email-notice'>
          **Once the results are available a soft-copy will be sent to the email-id
          </div>
        </label> 
        </div>

        <div className='form-group'>
        <label>
          Location:
          <input type="text" onChange={(e)=>{setLocation(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
          D.O.B:
          <input type="date" onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
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
          <option value="">Priority</option>
          <option value="Immediate">Immediate</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
         </select>
        </label>
        </div>

        <div className='form-group'>
        <label>
          Referring Doctor:
          <input type="text" onChange={(e)=>{setReferringDoctor(e.target.value)}}/>
        </label>
        </div>

        <div className='form-group'>
        <label>
          Lab-Test Name:
          <select onChange={(e) => setTest(e.target.value)} className="form-control">
            <option value="">Select Lab Test</option>
            <option value="CBC ">CBC </option>
            <option value="CRP ">CRP </option>
            <option value="RT PCR ">RT PCR </option>
            <option value="RBC ">RBC </option>
            <option value="ABC ">ABC </option>
            <option value="AMC ">AMC </option>
            <option value="Absolute Eosinophil Count ">Absolute Eosinophil-CT</option>
            <option value="Platelet Count ">Platelet Count </option>
            <option value="ALC ">ALC </option>
            <option value="Absolute Polymorphs ">Absolute Polymorphs </option>
            <option value="MCHC Blood ">MCHC Blood </option>
            <option value="MCH Blood ">MCH Blood </option>
            <option value="MCV Blood ">MCV Blood </option>
            <option value="MPV Blood ">MPV Blood </option>
            <option value="HCT Blood ">HCT Blood </option>
            <option value="TSH ">TSH </option>
            <option value="Thyroid Antibodies ">Thyroid Antibodies </option>
            <option value="Thyroid Panel ">Thyroid Panel </option>
            <option value="Hemoglobin Blood ">Hemoglobin Blood </option>
            <option value="Lipid Profile ">Lipid Profile </option>
            <option value="HbA1c ">HbA1c </option>
            <option value="PDW Blood ">PDW Blood </option>
            <option value="Vitamin B12 ">Vitamin B12 </option>
            <option value="ESR ">ESR </option>
            <option value="LFT ">LFT </option>
            <option value="RBS ">RBS </option>
            <option value="Ferritin ">Ferritin </option>
            <option value="FNAC ">FNAC </option>
            <option value="VDRL ">VDRL </option>
            <option value="Triple Marker ">Triple Marker </option>
            <option value="Double Marker ">Double Marker </option>
            <option value="Widal ">Widal </option>
            <option value="Semen Analysis ">Semen Analysis </option>
            <option value="Vitamin K ">Vitamin K </option>
            <option value="Troponin ">Troponin </option>
            <option value="Mantoux ">Mantoux </option>
            <option value="Typhidot ">Typhidot </option>
            <option value="Vitamin D ">Vitamin D </option>
            <option value="Prolactin ">Prolactin </option>
            <option value="Beta hCG ">Beta hCG </option>
            <option value="FBS ">FBS </option>
            <option value="Creatine Kinase ">Creatine Kinase </option>
            <option value="WBC Blood ">WBC Blood </option>
            <option value="RAST ">RAST </option>
            <option value="Dengue ">Dengue </option>
            <option value="KFT ">KFT </option>
            <option value="Urine Culture ">Urine Culture </option>
            <option value="HDL Cholesterol ">HDL Cholesterol </option>
            <option value="LDL Cholesterol ">LDL Cholesterol </option>
            <option value="VLDL Cholesterol ">VLDL Cholesterol </option>
            <option value="C Peptide ">C Peptide </option>
            <option value="Dengue IgM ">Dengue IgM </option>
            <option value="Dengue IgG ">Dengue IgG </option>
            <option value="Dengue Ns1 Antigen ">Dengue Ns1 Antigen </option>
            <option value="Bilirubin ">Bilirubin </option>
            <option value="Troponin I ">Troponin I </option>
            <option value="Troponin T ">Troponin T </option>
            <option value="Peripheral Blood Smear ">Peripheral Blood Smear </option>
            <option value="Pap Smear ">Pap Smear </option>
            <option value="Karyotyping ">Karyotyping </option>
            <option value="HIV ">HIV </option>
            <option value="Cortisol ">Cortisol </option>
            <option value="Potassium Blood ">Potassium Blood </option>
            <option value="Stool Culture ">Stool Culture </option>
            <option value="Stool Occult Blood ">Stool Occult Blood </option>
            <option value="CA 125 ">CA 125 </option>
            <option value="osterone ">osterone </option>
            <option value="PPBS ">PPBS </option>
            <option value="CA 15-3 ">CA 15-3 </option>
            <option value="Vitamin B9 ">Vitamin B9 </option>
            <option value="CA 19-9 ">CA 19-9 </option>
            <option value="Vitamin C ">Vitamin C </option>
            <option value="Aldolase ">Aldolase </option>
            <option value="AFP ">AFP </option>
            <option value="Urine Cotinine ">Urine Cotinine </option>
            <option value="BUN ">BUN </option>
            <option value="Serum Calcium ">Serum Calcium </option>
            <option value="Serum Potassium ">Serum Potassium </option>
            <option value="CMP Blood ">CMP Blood </option>
            <option value="T3 ">T3 </option>
            <option value="T4 ">T4 </option>
            <option value="UPCR ">UPCR </option>
            <option value="Serum Electrolytes ">Serum Electrolytes </option>
            <option value="Progesterone ">Progesterone </option>
            <option value="BMD ">BMD </option>
            <option value="Magnesium ">Magnesium </option>
            <option value="Albumin ">Albumin </option>
            <option value="Lactic Acid ">Lactic Acid </option>
            <option value="Gonorrhea ">Gonorrhea </option>
            <option value="Calcitonin ">Calcitonin </option>
            <option value="Globulin ">Globulin </option>
            <option value="AST ">AST </option>
            <option value="TIBC ">TIBC </option>
            <option value="Serum Iron ">Serum Iron </option>
            <option value="Haptoglobin ">Haptoglobin </option>
            <option value="HER2 ">HER2 </option>
            <option value="Prealbumin Blood ">Prealbumin Blood </option>
            <option value="Reticulocyte Count ">Reticulocyte Count </option>
            <option value="Fibrinogen ">Fibrinogen </option>
            <option value="Digoxin ">Digoxin </option>
            <option value="FSH ">FSH </option>
            <option value="LH ">LH </option>
            <option value="Arthritis Profile ">Arthritis Profile </option>
            <option value="Torch Profile ">Torch Profile </option>
            <option value="Coagulation Profile ">Coagulation Profile </option>
            <option value="DLC ">DLC </option>
            <option value="Brain MRI">Brain MRI</option>
            <option value="Brain CT Scan">Brain CT Scan</option>
            <option value="Beta-Hydroxybutyrate ">Beta-Hydroxybutyrate </option>
            <option value="IgA ">IgA </option>
            <option value="IgM ">IgM </option>
            <option value="IgE ">IgE </option>
            <option value="IgG ">IgG </option>
            <option value="KOH ">KOH </option>
            <option value="Estradiol ">Estradiol </option>
            <option value="DHEA Sulfate ">DHEA Sulfate </option>
            <option value="DHEA ">DHEA </option>
            <option value="Sodium Blood ">Sodium Blood </option>
            <option value="Phosphorus Blood ">Phosphorus Blood </option>
            <option value="Chloride Blood ">Chloride Blood </option>
            <option value="Anti CCP ">Anti CCP </option>
            <option value="GGT Blood ">GGT Blood </option>
            <option value="Amylase ">Amylase </option>
            <option value="Lipase ">Lipase </option>
            <option value="Ionized Calcium ">Ionized Calcium </option>
            <option value="ALP ">ALP </option>
            <option value="ASO ">ASO </option>
            <option value="Creatinine ">Creatinine </option>
            <option value="Rheumatoid Factor ">Rheumatoid Factor </option>
            <option value="Uric Acid ">Uric Acid </option>
            <option value="ALT ">ALT </option>
            <option value="D-Dimer ">D-Dimer </option>
            <option value="Hepatitis C Virus ">Hepatitis C Virus </option>
            <option value="Hepatitis A Antibody IgM ">Hepatitis A Antibody IgM </option>
            <option value="Hepatitis A Antibody IgG ">Hepatitis A Antibody IgG </option>
            <option value="Hepatitis B Surface Antibody ">Hepatitis B Surface Antibody </option>
            <option value="Hepatitis B Surface Antigen ">Hepatitis B Surface Antigen </option>
            <option value="HBsAg Quantitative ">HBsAg Quantitative </option>
            <option value="Hepatitis B Core Antibody ">Hepatitis B Core Antibody </option>
            <option value="Hepatitis B Profile ">Hepatitis B Profile </option>
            <option value="Urine Glucose ">Urine Glucose </option>
            <option value="DNPH ">DNPH </option>
            <option value="MDMA Screen Urine ">MDMA Screen Urine </option>
            <option value="Blood Group ">Blood Group </option>
            <option value="Malaria Parasite Identification ">Malaria Parasite Identification </option>
            <option value="G6PD ">G6PD </option>
            <option value="APTT ">APTT </option>
            <option value="Prothrombin Time ">Prothrombin Time </option>
            <option value="Creatinine 24 Hour Urine ">Creatinine 24 Hour Urine </option>
            <option value="X Rays">X Rays</option>
            <option value="PET Scan">PET Scan</option>
            <option value="Angiography">Angiography</option>
            <option value="Fluoroscopy">Fluoroscopy</option>
            <option value="Nuclear Medicine Imaging">Nuclear Medicine Imaging</option>
            <option value="Mammography">Mammography</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Mycobacterial Culture ">Mycobacterial Culture </option>
            <option value="Mycobacterium Combined Panel ">Mycobacterium Combined Panel </option>
            <option value="Sputum AFB ">Sputum AFB </option>
            <option value="Gram Stain Bacterial Vaginosis ">Gram Stain Bacterial Vaginosis </option>
            <option value="Gram Stain ">Gram Stain </option>
            <option value="Arterial Blood Gas ">Arterial Blood Gas </option>
            <option value="Indirect Bilirubin ">Indirect Bilirubin </option>
            <option value="Coombs ">Coombs </option>
            <option value="Colonoscopy with Polypectomy Biopsy ">Colonoscopy with Polypectomy Biopsy </option>
            <option value="Prostate Biopsy ">Prostate Biopsy </option>
            <option value="Liver Biopsy">Liver Biopsy</option>
            <option value="Cervix Biopsy ">Cervix Biopsy </option>
            <option value="Skin Biopsy ">Skin Biopsy </option>
            <option value="17 Hydroxyprogesterone ">17 Hydroxyprogesterone </option>
            <option value="ELISA ">ELISA </option>
            <option value="Galactosemia ">Galactosemia </option>
            <option value="Immunofixation ">Immunofixation </option>
            <option value="LDH ">LDH </option>
            <option value="PSA ">PSA </option>
            <option value="ACTH Stimulation ">ACTH Stimulation </option>
            <option value="Anti Mullerian Hormone ">Anti Mullerian Hormone </option>
            <option value="Antinuclear Antibody ">Antinuclear Antibody </option>
            <option value="Blood Culture ">Blood Culture </option>
            <option value="Chlamydia ">Chlamydia </option>
            <option value="Direct Antiglobulin ">Direct Antiglobulin </option>
            <option value="Hair Follicle Drug ">Hair Follicle Drug </option>
            <option value="Glucose Tolerance ">Glucose Tolerance </option>
            <option value="Homocysteine ">Homocysteine </option>
            <option value="Paternity ">Paternity </option>
            <option value="Procalcitonin ">Procalcitonin </option>
            <option value="Allergy Skin ">Allergy Skin </option>
            <option value="Strep Throat ">Strep Throat </option>
            <option value="Syphilis ">Syphilis </option>
            <option value="Urine Drug ">Urine Drug </option>
            <option value="Adenosine Deaminase ">Adenosine Deaminase </option>
            <option value="Alcohol Blood ">Alcohol Blood </option>
            <option value="Ammonia ">Ammonia </option>
            <option value="AAT ">AAT </option>
            <option value="Anti-dsDNA ">Anti-dsDNA </option>
            <option value="Antibody Titer ">Antibody Titer </option>
            <option value="Apo B ">Apo B </option>
            <option value="Blood Ketones ">Blood Ketones </option>
            <option value="Cardiolipin Antibodies ">Cardiolipin Antibodies </option>
            <option value="Copper ">Copper </option>
            <option value="Covid 19 Antibody ">Covid 19 Antibody </option>
            <option value="Covid 19 Antigen ">Covid 19 Antigen </option>
            <option value="Cholinesterase ">Cholinesterase </option>
            <option value="Chromogranin A ">Chromogranin A </option>
            <option value="Calprotectin ">Calprotectin </option>
            <option value="Catecholamines ">Catecholamines </option>
            <option value="Ceruloplasmin ">Ceruloplasmin </option>
            <option value="Complement ">Complement </option>
            <option value="Cryoglobulins ">Cryoglobulins </option>
            <option value="Cystatin C ">Cystatin C </option>
            <option value="Fecal Fat ">Fecal Fat </option>
            <option value="FIT ">FIT </option>
            <option value="Fetal Fibronectin ">Fetal Fibronectin </option>
            <option value="Folate Blood ">Folate Blood </option>
            <option value="Fructosamine ">Fructosamine </option>
            <option value="Growth Hormone ">Growth Hormone </option>
            <option value="Heavy Metals ">Heavy Metals </option>
            <option value="Histamine ">Histamine </option>
            <option value="HIV Viral Load ">HIV Viral Load </option>
            <option value="IGRA TB ">IGRA TB </option>
            <option value="Insulin ">Insulin </option>
            <option value="Lactate ">Lactate </option>
            <option value="Lead ">Lead </option>
            <option value="Lipoprotein-A ">Lipoprotein-A </option>
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
        
        <button type='submit' className='submit-button'>Submit</button>
        

      </form>
    </div>
    </div>
  )
}

export default LabTest