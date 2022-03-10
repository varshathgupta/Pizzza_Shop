import React,{ useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import Cart from './components/Cart'

import { CartProvider } from "react-use-cart";



function App() {
  const [cartItems, setCartItems] = useState([]);

  


  return (
      <Router>
        <Header />
        <CartProvider>
          <Products   />
          <Cart />
        </CartProvider>
        <Footer />
        
        
      </Router>
  )
}

export default App;