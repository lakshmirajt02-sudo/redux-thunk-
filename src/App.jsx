import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Tasks from './pages/Tasks'
import CreateTask from './pages/CreateTask'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Tasks/>}/>
          <Route path="/createtask" element={<CreateTask/>}/>
        </Routes>
    </div>
  )
}

export default App