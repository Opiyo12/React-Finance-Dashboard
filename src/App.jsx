import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/pages/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Transaction from './components/pages/Transaction'
import Settings from './components/pages/Settings'
import Dashboard from './components/pages/Dashboard'
import { Card, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { FaDollarSign } from 'react-icons/fa'

function App() {
  

  return (
   <div>
    <Sidebar/>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/transaction' element={<Transaction/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
    
   </div>
  )
}

export default App
