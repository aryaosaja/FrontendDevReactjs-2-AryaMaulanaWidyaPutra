import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'

import { items } from './components/Data'


const App = () => {
  const [data, setData] = useState([...items])
 
  return (
    <>
    <Router>
    <Navbar setData={setData} />
    <Routes>
      <Route path="/" element={<Product items={data} />} />
      <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
  
    </Router>
    </>
  )
}

export default App