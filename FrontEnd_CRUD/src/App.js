import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './Components/Add';
import Update from './Components/Update';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Navbar />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
