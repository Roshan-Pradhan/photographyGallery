import React from 'react'
import Header from './pages/Header'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Gallary from './pages/Gallary'
import SinglePhotos from './pages/SinglePhotos'
import Footer from './pages/Footer'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Gallary/>}/>
    <Route path="/photo/:id" element={<SinglePhotos/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App