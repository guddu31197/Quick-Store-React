import React from 'react'
import { CartCard, Footer, Navbar } from 'component'
import { Product, LandingPage, Login, WishList, CartPage, SignUp } from 'pages'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </div>
      <Footer />
      
    </>
  )
}
