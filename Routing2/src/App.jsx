import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route } from "react-router-dom"
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import AllProducts from './components/AllProducts'
import Cart from './components/Cart'

function App() {

  return (
    <div className="App">
      <h1>Routing2</h1>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allproduct" element={<AllProducts/>}/>
        <Route path="/allproducts/:title" element={<ProductDetails/>}/>
        <Route path="cart/" element={<Cart/>}/>

      </Routes>

    </div>
  )
}

export default App