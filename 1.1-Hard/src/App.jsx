import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About';
import Singup from './components/Singup';
import Products from './components/Products';
import Productsinfo from './components/Productsinfo';
import MainLayout from './MainLayout';
import Account from './components/Account';

function App() {
  return (
      <Routes>
         <Route element={<MainLayout />}>
                <Route index element={<h1>Home page</h1>} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Singup />} />   
                <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Productsinfo />} />
        <Route path="profile" element={<h1>Profile</h1>} />
        <Route path="account" element={<Account />  } />


        </Route>

      </Routes>
   


  )
}

export default App