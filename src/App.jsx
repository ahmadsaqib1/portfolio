import React from 'react'
import "./index.css"
import Home from './routes/Home'
import ContactMe from './routes/ContactMe'
import MyProjects from './routes/MyProjects'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="contact/" element={<ContactMe />} />
      <Route path="project/" element={<MyProjects/>} />
    </Routes>
    </>
  );
}

export default App
