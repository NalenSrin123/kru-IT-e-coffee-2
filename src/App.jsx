import React from 'react'
import Add_Form_data from './components/dashboard/components/Add_Form_data/Add_Form_data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
     <Routes>
      <Route path='/add' element={<Add_Form_data />} />
    </Routes>
  )
}

export default App
