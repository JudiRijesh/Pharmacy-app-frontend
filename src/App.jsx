
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
import SearchPage from './Pages/SearchPage'
import ServicesForm from './Pages/ServicesForm'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import BookLabTests from './Pages/BookLabTests'
import Categories from './Pages/Categories'


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
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/servicesform' element={<ServicesForm/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='book-lab-tests' element={<BookLabTests/>}/>
        <Route path='categories' element={<Categories/>}/>
     
      </Routes>
    </div>
    )
}
export default App
