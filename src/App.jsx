import React from 'react'
import "./index.css"
import Home from './routes/Home'
import Contact from './routes/Contact'
import MyProjects from './routes/MyProjects'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="contact/" element={<Contact />} />
      <Route path="project/" element={<MyProjects/>} />
    </Routes>
    </>
  );
}

export default App
