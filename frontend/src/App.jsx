import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AllRoutes } from './components/AllRoutes'
import Navbar  from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  
    <AllRoutes/>
      
    </>
  )
}

export default App
