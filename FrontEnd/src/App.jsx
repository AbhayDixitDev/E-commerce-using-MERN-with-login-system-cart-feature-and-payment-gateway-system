import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainHeader from '@/components/Header/MainHeader'
import Home from '@/pages/HomePage/Home'
import Sunglasses from '@/pages/Sunglasses'
import Eyeglasses from '@/pages/Eyeglasses'
import TermsAndConditions from '@/pages/TermsAndConditions'
import ContactUs from '@/pages/ContactUs'
import Footer from '@/components/Footer/Footer'
import ProductShow from '@/pages/ProductShow'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/checkout'
import Success from '@/pages/Success'
import Failed from '@/pages/Failed'
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <MainHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductShow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/failed" element={<Failed/>}/>

      </Routes>    
      <Footer/> 
     </BrowserRouter>
    </div>
  )
}

export default App