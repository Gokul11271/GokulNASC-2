import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminDashboard from './dash.jsx'
import Contact from './contact.jsx'
import Login from './login.jsx'
import Homepage from "./Homepage.jsx";
import CancelBookingForm from './cancelling.jsx'// 'Homepage' should match the exported component name


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
    
    <Login/>
    <AdminDashboard/>
    <App />
    <CancelBookingForm />
    <Contact />
  </StrictMode>,
)
