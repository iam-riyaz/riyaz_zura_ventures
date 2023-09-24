import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AllRoutes } from './components/AllRoutes'
import Navbar  from './components/Navbar.jsx'
import { Empty } from './components/Empty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <Empty/>
    <AllRoutes/>
      
    </>
  )
}

export default App
