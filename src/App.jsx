
import './App.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Medicines from './Pages/Medicines'
import Wellness from './Pages/Wellness'
import LabTest from './Pages/LabTest'
import HealthCare from './Pages/HealthCare'
import HealthCareDetails from './Pages/HealthCareDetails'
import MedicineDetails from './Pages/MedicineDetails'
import logo from './assets/logo.png'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import Appointments from './Pages/Appointments'
import Edit from './Pages/Edit'


function App() {
  return(
  <div className="App">
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/medicines' element={<Medicines/>}/>
        <Route path='/medicinedetails/:medicineId' element={<MedicineDetails/>}/>
        <Route path='/wellness' element={<Wellness/>}/>
        <Route path='/healthCare' element={<HealthCare/>}/>
        <Route path='/healthcaredetails/:deviceId' element={<HealthCareDetails/>}/>
        <Route path='/labtest' element={<LabTest/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
     
      </Routes>
    </div>
    )
}
export default App
