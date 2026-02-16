import { useState } from 'react'
import './App.css'
import Header from './components/woshe/Header'
import MySwiper from './components/woshe/Swiper'
import Cart from './components/woshe/Cart'
import Card from './components/woshe/Card'
import Cart2 from './components/woshe/Cart2'
import Woshe from './components/woshe/woshe'
import { CartProvider } from './context/CartContext'



function App() {

  return (
    <>
  <CartProvider>
     <Header/>
     <MySwiper/>
     <Cart/>
     
      <Card/>
      <Cart2/>
      <Woshe/>
  </CartProvider>





</>
  )
}

export default App
